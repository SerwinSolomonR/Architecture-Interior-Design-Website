import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = { 
  MIN_COPIES: 2, 
  COPY_HEADROOM: 2,
  STEP_DURATION: 3000,
  SLIDE_SPEED: 600      
};

const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [callback, elements, ...dependencies]);
};


const useStepAnimation = (trackRef, seqSize, logoCount, isVertical, isHovered) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (seqSize <= 0 || logoCount <= 0 || isHovered) return;

    const stepSize = seqSize / logoCount;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, ANIMATION_CONFIG.STEP_DURATION);

    return () => clearInterval(interval);
  }, [seqSize, logoCount, isHovered]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqSize <= 0) return;

    const stepSize = seqSize / logoCount;
    const offset = (currentIndex * stepSize);

    
    track.style.transition = `transform ${ANIMATION_CONFIG.SLIDE_SPEED}ms cubic-bezier(0.45, 0, 0.55, 1)`;
    track.style.transform = isVertical
      ? `translate3d(0, ${-offset}px, 0)`
      : `translate3d(${-offset}px, 0, 0)`;

    
    if (currentIndex >= logoCount) {
      const timeout = setTimeout(() => {
        track.style.transition = 'none';
        setCurrentIndex(0);
        track.style.transform = `translate3d(0, 0, 0)`;
      }, ANIMATION_CONFIG.SLIDE_SPEED);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, seqSize, logoCount, isVertical, trackRef]);
};

export const LogoLoop = memo(
  ({
    logos = [],
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const isVertical = direction === 'up' || direction === 'down';
    const activeSeqSize = isVertical ? seqHeight : seqWidth;

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;

      if (isVertical) {
        setSeqHeight(Math.ceil(sequenceHeight));
        const viewport = containerRef.current?.clientHeight ?? 0;
        const copiesNeeded = Math.ceil(viewport / (sequenceHeight || 1)) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      } else {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / (sequenceWidth || 1)) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos.length, gap, logoHeight]);
    useStepAnimation(trackRef, activeSeqSize, logos.length, isVertical, isHovered && pauseOnHover);

    const cssVariables = useMemo(
      () => ({
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClassName = useMemo(
      () => [
          'logoloop',
          isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
          fadeOut && 'logoloop--fade',
          scaleOnHover && 'logoloop--scale-hover',
          className
        ].filter(Boolean).join(' '),
      [isVertical, fadeOut, scaleOnHover, className]
    );

    const renderLogoItem = useCallback(
      (item, key) => {
        const content = item.node ? (
          <span className="logoloop__node">{item.node}</span>
        ) : (
          <img src={item.src} alt={item.alt ?? ''} loading="lazy" />
        );

        return (
          <li className="logoloop__item" key={key} role="listitem">
            {item.href ? (
              <a className="logoloop__link" href={item.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : content}
          </li>
        );
      },
      []
    );

    return (
      <div 
        ref={containerRef} 
        className={rootClassName} 
        style={{ ...cssVariables, ...style, width: toCssLength(width) }} 
        role="region" 
        aria-label={ariaLabel}
      >
        <div 
          className="logoloop__track" 
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: copyCount }).map((_, i) => (
            <ul className="logoloop__list" key={i} ref={i === 0 ? seqRef : null}>
              {logos.map((item, idx) => renderLogoItem(item, `${i}-${idx}`))}
            </ul>
          ))}
        </div>
      </div>
    );
  }
);

export default LogoLoop;