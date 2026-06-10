import React from "react";
import "./WatchSection.css";
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"></link>

const WatchSection = () => {
  return (
    <section className="watch-section">
      {/* LEFT IMAGE */}
      <div className="watch-left">
        <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9"  alt="interior" />

        <div className="play-btn">
          ▶
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="watch-right">
        <h2> 
          WATCH US HOW WE <br />
          <span>CREATE YOUR DREAM</span>
        </h2>

        <div className="steps">
          <div className="step">
            <div className="box">1</div>
            <div>
              <h4>Concept</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className="step">
            <div className="box">2</div>
            <div>
              <h4>Idea</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className="step">
            <div className="box">3</div>
            <div>
              <h4>Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="step">
            <div className="box">4</div>
            <div>
              <h4>Idea</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;