import React, { useState, useEffect, useRef } from 'react';
import './NumCount.css';

const StatItem = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      
      setCount(Math.floor(easeOutExpo(progress) * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target]);

  return (
    <div className="stat-box" ref={countRef}>
      <h2 className="stat-number">{count}</h2>
      <p className="stat-label">{label}</p>
      <div className="stat-icon-wrapper">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="96" height="96" stroke="currentColor" strokeWidth="3"/>
          <path d="M0 25L25 0M25 100L100 25M0 75L75 0M75 100L100 75M50 100L100 50M0 50L50 0" stroke="currentColor" strokeWidth="2"/>
          <path d="M25 0L100 75M0 25L75 100M50 0L100 50M0 50L50 100M75 0L100 25M0 75L25 100" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const data = [
    { target: 7849, label: "SQURE AREA COMPLEX" },
    { target: 8749, label: "SATISFIED CLIENTS" },
    { target: 4157, label: "COMPLETED PROJECTS" },
    { target: 2458, label: "CUP OF COFFEE" }
  ];

  return (
    <div className="stats-outer-wrapper">
      <div className="bg-lines">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      
      <section className="stats-content">
        {data.map((item, idx) => (
          <StatItem key={idx} target={item.target} label={item.label} />
        ))}
      </section>
    </div>
  );
};

export default StatsSection;