import React, { useState, useEffect } from "react";
import "./NewsSection.css";

const data = [
  { id: 1, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Sed lacinia pulvinar odio, nec tempus augue." },
  { id: 2, img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80", title: "Sed lacinia pulvinar odio, nec tempus augue." },
  { id: 3, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", title: "Integer vestibulum rutrum aliquet cras rutrum." },
  { id: 4, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80", title: "Mauris blandit aliquet elit, eget tincidunt nibh." },
  { id: 5, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", title: "Phasellus at sem interdum, efficitur dolor non." },
  { id: 6, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", title: "Quisque convallis varius nisi, ut rutrum sem." },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = data.length - cardsToShow;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="news">
      <h2 className="news-title">
        STAY UPDATED <span>WITH US</span>
      </h2>

      <div className="news-slider-window">
        <div 
          className="news-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {data.map((item) => (
            <div className="card-container" key={item.id}>
              <div className="card">
                <div className="card-img">
                  <img src={item.img} alt="" />
                </div>

                <div className="card-content">
                  <p className="meta">
                    ■ 7 MARCH 2023 &nbsp; ■ BY JOHN DOE
                  </p>
                  <h3>{item.title}</h3>
                  <p className="desc">
                    Aenean ultricies ex eu nunc feugiat auctor. Donec efficitur
                    elementum odio, convallis facilisis augue porttitor.
                  </p>
                  <button className="arrow">›</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;