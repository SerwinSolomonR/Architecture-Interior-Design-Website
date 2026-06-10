import React from 'react';
import './about.css';

const AboutSection = () => {
  const skills = [
    { label: 'ARCHITECTURE', value: 90 },
    { label: '3D DESIGN', value: 80 },
    { label: 'INTERIOR DESIGN', value: 95 },
  ];

  return (
    <section className="about-container">
      <div className="about-content">
        
        {/* Left Side: Image with Frame */}
        <div className="image-wrapper">
          <div className="white-frame"></div>
          <img 
  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200&h=800" 
  alt="Modern Interior Design" 
  className="main-image"
/>
        </div>

        {/* Right Side: Text and Progress Bars */}
        <div className="text-wrapper">
          <h2 className="title-top">DISTINCTIVE INTERIOR</h2>
          <h2 className="title-bottom">FOR SPECIAL IDEAS</h2>
          
          <div className="zigzag-divider">
            <svg width="60" height="10" viewBox="0 0 60 10">
              <path d="M0 5 L5 0 L10 5 L15 0 L20 5 L25 0 L30 5 L35 0 L40 5 L45 0 L50 5 L55 0 L60 5" 
                    fill="none" stroke="#c4a47c" strokeWidth="2" />
            </svg>
          </div>

          <p className="description">
            Fusce accumsan felis sed purus sollicitudin posuere. Vivamus id pharetra 
            augue. Phasellus molestie ornare lacus mattis iaculis. Nulla dui dui, convallis 
            et venenatis id, condimentum ut justo.
          </p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-label">{skill.label}</span>
                  <span className="skill-percentage">{skill.value}%</span>
                </div>
                <div className="progress-bg">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div> 
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;