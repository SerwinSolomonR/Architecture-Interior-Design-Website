import React from "react";
import "./PageHeader.css";

const ServicesHero = () => {
  return (
 <Servicespage2/>
    
    
  );
};

import { LuLayoutTemplate } from "react-icons/lu"; // More modern architectural icon

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
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus."
  },
  {
    id: 4,
    title: "Construction",
    subtitle: "WE DESIGN IDEAS",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop",
    desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus."
  },
  {
    id: 5,
    title: "Construction",
    subtitle: "WE DESIGN IDEAS",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus."
  },
  {
    id:6,
    title: "Construction",
    subtitle: "WE DESIGN IDEAS",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    desc: "Quisque vel condimentum dolor, vitae luctus lacus. Integer finibus arcu non ultrices rhoncus."
  }
];

function Servicespage2() {
  return (
    <section className="services-01">
      <div className="grid-01">
        {SERVICES.map((item) => (
          <div className="card-3d-01" key={item.id}>
            <div className="card-inner-01">
              
              
              <div className="card-front-01">
                <img src={item.img} alt={item.title} className="card-img-01" />
                <div className="content-3d-01">
                  <span className="corner-01 top-left-01"></span>
                  <h3>{item.title}</h3>
                  <p className="subtitle-01">{item.subtitle}</p>
                  <span className="corner-01 bottom-right-01"></span>
                </div>
              </div>

             
              <div className="card-back-01">
                <div className="back-content-01">
                  <span className="corner-01 top-left-01"></span>
                  <div className="icon-01"><LuLayoutTemplate /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="corner-01 bottom-right-01"></span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default ServicesHero;