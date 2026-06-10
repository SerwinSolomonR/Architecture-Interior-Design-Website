import React from "react";
import "./Services.css";
import { LuLayoutTemplate } from "react-icons/lu"; 

const SERVICES = [
  {
    id: 1,
    title: "Interior Design",
    subtitle: "WE DESIGN IDEAS",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus."
  },
  {
    id: 2,
    title: "Floor Plan Design",
    subtitle: "WE DESIGN IDEAS",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    desc: "Comprehensive spatial planning and architectural drafting for residential projects."
  },
  {
    id: 3,
    title: "Construction",
    subtitle: "WE DESIGN IDEAS",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus."
  }
];

export default function Services() {
  return (
    <section className="services-srv">
      <div className="title-wrapper-srv">
        <h2 className="title-srv">WHAT <span>WE PROVIDE</span></h2>
        <div className="wave-srv"></div>
      </div>

      <div className="grid-srv">
        {SERVICES.map((item) => (
          <div className="card-3d-srv" key={item.id}>
            <div className="card-inner-srv">
              
              {/* FRONT (Image Design) */}
              <div className="card-front-srv">
                <img src={item.img} alt={item.title} className="card-img-srv" />
                <div className="content-3d-srv">
                  <span className="corner top-left"></span>
                  <h3>{item.title}</h3>
                  <p className="subtitle-srv">{item.subtitle}</p>
                  <span className="corner bottom-right"></span>
                </div>
              </div>

          
              <div className="card-back-srv">
                <div className="back-content-srv">
                  <span className="corner top-left"></span>
                  <div className="icon-srv"><LuLayoutTemplate /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="corner bottom-right"></span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      <button className="btn-below-srv">VIEW ALL SERVICES</button>
    </section>
  );
}