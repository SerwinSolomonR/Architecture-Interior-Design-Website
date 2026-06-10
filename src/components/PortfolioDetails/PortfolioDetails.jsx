import React, { useState, useMemo, useRef } from "react";
import "./PortfolioDetails.css";

const PortfolioDetailsSection = () => {
  const [filter, setFilter] = useState("ALL");
  const scrollRef = useRef(null);
  
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const original = [
    { id: 1, title: "Modern House Interior New York", category: "INTERIOR DESIGN", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Modern Architecture Design", category: "ARCHITECTURE", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Luxury Villa Project", category: "INTERIOR DESIGN", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Industrial Building", category: "CONSTRUCTION", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Office Interior", category: "INTERIOR DESIGN", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Creative Structure", category: "ARCHITECTURE", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80" },
  ];

  const filteredItems = useMemo(() => {
    return filter === "ALL" ? original : original.filter(item => item.category === filter);
  }, [filter, original]);

  const structuredUnits = useMemo(() => {
    const units = [];
    let i = 0;
    let patternIndex = 0;
    while (i < filteredItems.length) {
      if (patternIndex % 3 === 2 && i + 1 < filteredItems.length) {
        units.push({ type: "double", items: [filteredItems[i], filteredItems[i + 1]] });
        i += 2;
      } else {
        units.push({ type: "single", item: filteredItems[i] });
        i += 1;
      }
      patternIndex++;
    }
    return units;
  }, [filteredItems]);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="section-prdt">
      <div className="filter-header-prdt">
        {["ALL", "ARCHITECTURE", "INTERIOR DESIGN", "CONSTRUCTION"].map((cat) => (
          <div 
            key={cat} 
            className={`filter-item-prdt ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      <div 
        className="slider-prdt" 
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
        style={{ overflowX: 'auto', cursor: 'grab', scrollbarWidth: 'none' }}
      >
        <div className="track-prdt">
          {structuredUnits.map((unit, i) => (
            <div className="unit-wrapper-prdt" key={i}>
              {unit.type === "single" ? (
                <Card data={unit.item} type="rect" />
              ) : (
                <div className="square-stack-prdt">
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
  <div className={`card-prdt ${type === "sq" ? "card-sq-prdt" : "card-rect-prdt"}`}>
    <img src={data.image} alt={data.title} decoding="async" draggable="false" />
    <div className="overlay-prdt">
      <div className="plus-prdt">+</div>
    </div>
    <div className="content-prdt">
      <h3>{data.title}</h3>
    </div>
    <div className="vertical-prdt">{data.category}</div>
  </div>
);

export default PortfolioDetailsSection;