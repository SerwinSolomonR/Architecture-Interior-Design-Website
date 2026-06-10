import React, { useState, useEffect, useRef } from "react";
import "./clientReview.css";

const originalData = [
  { id: 1, name: "Rebecca Ruth", role: "CEO FOUNDER", text: "Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac dictum vestibulum. Cras id arcu turpis. Nulla ligula velit.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Lala Rose", role: "CEO FOUNDER", text: "Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac dictum vestibulum. Cras id arcu turpis. Nulla ligula velit.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: 3, name: "John Smith", role: "CEO FOUNDER", text: "Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac dictum vestibulum. Cras id arcu turpis. Nulla ligula velit.", img: "https://randomuser.me/api/portraits/men/44.jpg" },
  { id: 4, name: "Emma Watson", role: "CEO FOUNDER", text: "Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac dictum vestibulum. Cras id arcu turpis. Nulla ligula velit.", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 5, name: "Chris Evans", role: "CEO FOUNDER", text: "Suspendisse sem est, eleifend id vulputate sit amet, rhoncus mollis justo. Cras iaculis justo ac dictum vestibulum. Cras id arcu turpis. Nulla ligula velit.", img: "https://randomuser.me/api/portraits/men/11.jpg" },
];

const Testimonial = () => {
  const [items] = useState([...originalData, ...originalData, ...originalData]);
  
  const cardWidth = 440; 
  const gap = 15; 
  const fullWidth = cardWidth + gap;

  const [index, setIndex] = useState(originalData.length);
  const [transition, setTransition] = useState(true);
  const [isSnapping, setIsSnapping] = useState(false);
  const [offset, setOffset] = useState(0);
  
  const sliderRef = useRef(null);
  const isMoving = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        setOffset(sliderRef.current.offsetWidth / 2 - cardWidth / 2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTransitionEnd = () => {
    // Check if we need to loop
    if (index >= originalData.length * 2) {
      setIsSnapping(true);
      setTransition(false);
      setIndex(index - originalData.length);
    } else if (index < originalData.length) {
      setIsSnapping(true);
      setTransition(false);
      setIndex(index + originalData.length);
    }
    
    isMoving.current = false;
  };

  useEffect(() => {
    if (!transition) {
      const frame = requestAnimationFrame(() => {
        setTransition(true);
        setIsSnapping(false);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [transition]);

  const move = (dir) => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIndex(prev => dir === 'next' ? prev + 1 : prev - 1);
  };

  return (
    <div className="testimonial-section-cr">
      <div className="bg-watermark-cr">TESTIMONIAL</div>

      <div className="header-cr">
        <div className="title-area-cr">
          <h2>WHAT OUR <span>CLIENT SAYS</span></h2>
          <div className="jagged-line-cr" />
        </div>
        <div className="nav-cr">
          <button onClick={() => move('prev')}>‹ PREV</button>
          <button onClick={() => move('next')}>NEXT ›</button>
        </div>
      </div>

      <div className="slider-cr" ref={sliderRef}>
        <div
          className="track-cr"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${-index * fullWidth + offset}px)`,
            transition: transition ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
          }}
        >
          {items.map((item, i) => (
            <div className="card-wrapper-cr" key={`${item.id}-${i}`}>
              <div className={`card-cr ${i === index ? "active" : ""} ${isSnapping ? "no-transition" : ""}`}>
                <div className="cross-tl-cr">+</div>
                <div className="cross-br-cr">+</div>
                <div className="quote-watermark-cr">““</div>

                <p className="testimonial-text-cr">{item.text}</p>
                
                <div className="card-footer-cr">
                  <div className="stars-cr">★★★★★</div>
                  <h3>{item.name}</h3>
                  <span className="role-cr">{item.role}</span>
                </div>

                <div className="avatar-box-cr">
                  <div className="avatar-img-cr">
                    <img src={item.img} alt={item.name} loading="eager" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;