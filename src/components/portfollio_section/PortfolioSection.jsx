import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const original = [
    { id: 1, title: "Modern House Interior", category: "INTERIOR", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Creative Building", category: "CREATIVE", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Luxury Villa", category: "INTERIOR", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Minimal Design", category: "CREATIVE", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Office Interior", category: "INTERIOR", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Urban Studio", category: "CREATIVE", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Skyscraper View", category: "INTERIOR", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Nordic Loft", category: "CREATIVE", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80" }
  ];

  const structuredUnits = useMemo(() => {
    const units = [];
    let i = 0;
    let patternIndex = 0;
    while (i < original.length) {
      if (patternIndex % 3 === 2 && i + 1 < original.length) {
        units.push({ type: "double", items: [original[i], original[i + 1]] });
        i += 2;
      } else {
        units.push({ type: "single", item: original[i] });
        i += 1;
      }
      patternIndex++;
    }
    return units;
  }, []);

  const unitsCount = structuredUnits.length;
  const loopedUnits = useMemo(() => [...structuredUnits, ...structuredUnits, ...structuredUnits], [structuredUnits]);

  const [index, setIndex] = useState(unitsCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [unitWidth, setUnitWidth] = useState(330); 

  const trackRef = useRef(null);
  const unitRef = useRef(null);
  const isMoving = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (unitRef.current) setUnitWidth(unitRef.current.offsetWidth);
    };
    const observer = new ResizeObserver(updateWidth);
    if (unitRef.current) observer.observe(unitRef.current);
    updateWidth();
    return () => observer.disconnect();
  }, []);

  const handleTransitionEnd = () => {
    isMoving.current = false;
    if (index >= unitsCount * 2 || index <= 0) {
      setIsTransitioning(false);
      setIndex(unitsCount);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      void trackRef.current?.offsetHeight;
      setIsTransitioning(true);
    }
  }, [isTransitioning]);

  const move = useCallback((dir) => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIndex(prev => (dir === "next" ? prev + 1 : prev - 1));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => move("next"), 5000);
    return () => clearInterval(intervalRef.current);
  }, [move]);

  return (
    <div className="section-prt">
      <div className="top-prt">
        <h2>SEE OUR <span>LATEST WORK</span></h2>
        <div className="nav-prt">
          <button onClick={() => move("prev")} className="nav-btn-prt">← PREV</button>
          <button onClick={() => move("next")} className="nav-btn-prt">NEXT →</button>
        </div>
      </div>

      <div className="slider-prt">
        <div
          ref={trackRef}
          className="track-prt"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(-${index * unitWidth}px, 0, 0)`,
            transition: isTransitioning 
              ? "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)" 
              : "none"
          }}
        >
          {loopedUnits.map((unit, i) => (
            <div 
              className="unit-wrapper-prt" 
              key={i} 
              ref={i === 0 ? unitRef : null}
            >
              {unit.type === "single" ? (
                <Card data={unit.item} type="rect" />
              ) : (
                <div className="square-stack-prt">
                  <Card data={unit.items[0]} type="sq" />
                  <Card data={unit.items[1]} type="sq" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ data, type }) => (
  <div className={`card-prt ${type === "sq" ? "card-sq" : "card-rect"}`}>
    <img src={data.image} alt={data.title} decoding="async" />
    <div className="overlay-prt">
      <div className="plus-prt">+</div>
    </div>
    <div className="content-prt">
      <h3>{data.title}</h3>
    </div>
    <div className="vertical-prt">{data.category}</div>
  </div>
);

export default PortfolioSection;