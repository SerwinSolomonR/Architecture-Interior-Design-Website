import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Concept",
      desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: "Idea",
      desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="9" r="5" />
          <path d="M9 14l-1 5h8l-1-5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="1" y1="12" x2="3" y2="12" />
        </svg>
      )
    },
    {
      title: "Design",
      desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <line x1="2" y1="2" x2="9" y2="9" />
        </svg>
      )
    },
    {
      title: "Excecution", 
      desc: "Maecenas eget commodo risus. Praesent facilisis iaculis dapibus.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1V15a2 2 0 0 1-2-2 2 2 0 0 1 2-2v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    }
  ];

  return (
    <div className="features-wrapper">
      {/* Background Vertical Grid Lines */}
      <div className="grid-lines">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="features-container">
        <div className="features-header">
          <h2>
            OUR BEST <span className="highlight">FEATURES</span>
          </h2>
          <div className="zigzag-divider"></div>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="icon-container">
                <div className="icon-border">
                  {f.icon}
                </div>
                {i < features.length - 1 && <div className="connector"></div>}
              </div>
              <h3>{f.title}</h3>
              <div className="short-underline"></div>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;