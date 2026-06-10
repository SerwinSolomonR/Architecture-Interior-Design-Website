import React from "react";
import "./ConstructionSection.css";

const ConstructionSection = () => {
  return (
    <div className="main-container-rek fade-in">
      {/* Upper Header & Stats Section */}
      <header className="header-flex-rek">
        <div className="title-block-rek">
          <h1 className="main-title-rek">
            We Help You Buildng The Dreams & Bring <br /> More Than You Expect
          </h1>
        </div>
        <div className="stats-column-rek">
          <div className="stat-row-rek">
            <span className="stat-val-rek">100%</span>
            <span className="stat-desc-rek">WORK COMPLETED</span>
          </div>
          <div className="stat-row-rek">
            <span className="stat-val-rek">250</span>
            <span className="stat-desc-rek">WORKERS HAVE DONE</span>
          </div>
          <div className="stat-row-rek">
            <span className="stat-val-rek">480</span>
            <span className="stat-desc-rek">IN DAYS COMPLETED</span>
          </div>
        </div>
      </header>

      {/* Top Image Grid */}
      <div className="grid-top-rek">
        <div className="grid-item-rek">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" alt="Architecture" />
        </div>
        <div className="grid-item-rek">
          <img src="https://images.unsplash.com/photo-1513584684374-8bdb74838a0f" alt="Interior" />
        </div>
        <div className="grid-item-rek large-grid-rek">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Modern Room" />
        </div>
      </div>

      {/* Info & Blueprint Section */}
      <div className="blueprint-section-rek">
        <div className="text-side-rek">
          <p className="para-text-rek">
            Nunc id orci bibendum, pulvinar magna eu, egestas mauris. Fusce augue nibh, rutrum sit amet bibendum eu, fringilla eget odio. Vestibulum quis sodales tortor. Integer sagittis nisi et commodo semper.
          </p>
          <p className="para-text-rek">
            Maecenas sit amet luctus magna. In placerat ante. Donec et elit metus. Morbi faucibus nibh erat, ac dictum nisi aliquet sit amet. Nullam at elit nisi. Donec et elementum, auctor elit Link, vehicula mauris. Etiam varius faucibus tortor quis iaculis.
          </p>

          <div className="contact-card-rek">
            <div className="icon-item-rek">
              <div className="icon-square-rek">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details-rek">
                <h5>Project Location</h5>
                <p>#8901 Marmora Road Chi, Vietnam</p>
              </div>
            </div>
            <div className="icon-item-rek">
              <div className="icon-square-rek">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="details-rek">
                <h5>Call Us</h5>
                <p>+91 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="plan-side-rek">
          <div className="floor-plan-svg-rek">
            <svg viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
                {/* External Grid/Dimension Lines */}
                <g stroke="#d4b48c" strokeWidth="1" opacity="0.5">
                    <line x1="50" y1="50" x2="750" y2="50" />
                    <line x1="50" y1="950" x2="750" y2="950" />
                    <line x1="50" y1="50" x2="50" y2="950" />
                    <line x1="750" y1="50" x2="750" y2="950" />
                </g>

                {/* Main Structural Walls (Double Line) */}
                <g stroke="#c19a6b" strokeWidth="2.5" fill="none">
                    {/* Outer Perimeter */}
                    <path d="M150 150 L650 150 L650 850 L150 850 Z" />
                    {/* Internal Room Dividers */}
                    <path d="M150 450 L350 450 L350 150" />
                    <path d="M350 450 L650 450" />
                    <path d="M400 450 L400 850" />
                    <path d="M150 650 L400 650" />
                </g>

                {/* Windows (Blue/Glass indicators) */}
                <g stroke="#c19a6b" strokeWidth="1">
                    <rect x="200" y="145" width="100" height="10" fill="white" />
                    <rect x="645" y="550" width="10" height="100" fill="white" />
                </g>

                {/* Door Arcs */}
                <g stroke="#c19a6b" strokeWidth="1.5" fill="none">
                    <path d="M350 400 Q400 400 400 350" /> {/* Living Room Door */}
                    <path d="M150 600 Q200 600 200 650" /> {/* Bathroom Door */}
                </g>

                {/* Furniture Details */}
                {/* Kitchen Stoves */}
                <g fill="none" stroke="#c19a6b" strokeWidth="1.5">
                    <circle cx="210" cy="220" r="15" />
                    <circle cx="260" cy="220" r="15" />
                    <circle cx="210" cy="270" r="15" />
                    <circle cx="260" cy="270" r="15" />
                </g>

                {/* Dining Table Set */}
                <g stroke="#c19a6b" strokeWidth="1.5" fill="none">
                    <circle cx="530" cy="250" r="40" /> {/* Table */}
                    <circle cx="530" cy="190" r="10" /> {/* Chair N */}
                    <circle cx="530" cy="310" r="10" /> {/* Chair S */}
                    <circle cx="470" cy="250" r="10" /> {/* Chair W */}
                    <circle cx="590" cy="250" r="10" /> {/* Chair E */}
                </g>

                {/* Bed */}
                <rect x="450" y="680" width="150" height="120" stroke="#c19a6b" strokeWidth="2" fill="none" />
                <rect x="460" y="690" width="60" height="30" stroke="#c19a6b" strokeWidth="1" fill="none" />
                <rect x="530" y="690" width="60" height="30" stroke="#c19a6b" strokeWidth="1" fill="none" />

                {/* Text Labels */}
                <g fill="#c19a6b" fontFamily="Arial" fontWeight="bold" fontSize="14" textAnchor="middle">
                    <text x="250" y="350">KITCHEN</text>
                    <text x="500" y="400">LIVING ROOM</text>
                    <text x="400" y="220">TERRACE</text>
                    <text x="270" y="750">BATHROOM</text>
                    <text x="525" y="600">BEDROOM</text>
                    <text x="525" y="820">DRESSING ROOM</text>
                </g>
            </svg>
          </div>
          <h4 className="plan-label-rek">FLOOR PLAN</h4>
        </div>
      </div>

      {/* Middle Image Gallery */}
      <div className="gallery-mid-rek">
        <div className="gallery-img-rek">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" alt="Living" />
        </div>
        <div className="gallery-img-rek">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" alt="Lounge" />
        </div>
      </div>

      <p className="bottom-note-rek">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum a metus a fermentum. Proin rutrum, mauris quis aliquet suscipit, mauris ex imperdiet erat, ac tristique lorem nibh vitae orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate sit amet sapien eget varius. Morbi tristique felis quis tortor porta, sit amet mattis ipsum tempus.
      </p>

      {/* Video/Banner Section */}
      <div className="video-banner-rek">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c" alt="Workspace" />
        <div className="overlay-btn-rek">
          <div className="play-triangle-rek"></div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionSection;