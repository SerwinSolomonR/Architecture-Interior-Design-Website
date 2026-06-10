import { useState, useEffect, useMemo, useCallback } from "react";
import "./hero.css";

export default function Hero() {
  const slides = useMemo(() => [
    {
      id: 1,
      title: "WE CREATE YOUR DREAM",
      highlight: "IDEAS",
      subtitle: "CREATIVE ARCHITECTURE",
      text: "Quisque vel condimentum dolor, vitae luctus lacus...",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
    },
    {
      id: 2,
      title: "MODERN INTERIOR DESIGN",
      highlight: "STYLE",
      subtitle: "SMART LIVING",
      text: "Integer finibus arcu non ultrices rhoncus...",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    {
      id: 3,
      title: "SUSTAINABLE OUTDOOR LIVING",
      highlight: "GREEN",
      subtitle: "ECO SPACES",
      text: "Donec elementum leo sit amet quam interdum, sit amet tincidunt lectus aliquet. Mauris sodales massa at nunc tempor, sit amet sollicitudin eros efficitur.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 4,
      title: "MINIMALIST LUXURY VILLAS",
      highlight: "PURE",
      subtitle: "ELEGANT LINES",
      text: "Morbi sed efficitur sapien, ut accumsan augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    }
  ], []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="hero">
      <div className="hero-slider">
        <div 
          className="hero-track" 
          style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
        >
          {slides.map((slide) => (
            <div className="hero-slide" key={slide.id}>
              <img src={slide.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-overlay">
        <p className="tag">INTERIOR DESIGN</p>
        
        <h1 key={`h1-${currentSlide}`} className="animate-text">
          {slides[currentSlide].title} <br/>
          <span>{slides[currentSlide].highlight}</span>{" "}
          {slides[currentSlide].subtitle}
        </h1>

        <p key={`p-${currentSlide}`} className="animate-text delay">
          {slides[currentSlide].text}
        </p>

        <button className="read-btn animate-text delay2">
          READ MORE
        </button>
      </div>

      <div className="hero-controls">
        <button onClick={prevSlide}> <i className="fa-solid fa-arrow-left"></i>PREV</button>
        <span>{currentSlide + 1}</span>
        <button onClick={nextSlide}>NEXT<i className="fa-solid fa-arrow-right"></i></button>
      </div>

      <div className="hero-social">
        <span className="follow-text">FOLLOW US ON</span>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}