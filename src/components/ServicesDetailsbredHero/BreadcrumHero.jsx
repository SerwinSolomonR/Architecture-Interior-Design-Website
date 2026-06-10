import React, { useState } from 'react';
import './BreadcrumHero.css';

const servicesData = [
  {
    id: 'interior',
    label: 'INTERIOR DESIGN',
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    title: 'Modern aesthetics tailored to your lifestyle.',
    description: 'Our interior design services focus on creating functional spaces that reflect your personality. We handle everything from color palettes to custom furniture selection.'
  },
  {
    id: 'floorplan',
    label: 'FLOOR PLAN DESIGN',
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    title: 'Precision planning for seamless execution.',
    description: 'Detailed 2D and 3D floor plans that optimize space and flow. We ensure every square inch of your property is utilized efficiently and beautifully.'
  },
  {
    id: 'construction',
    label: 'CONSTRUCTION',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop',
    title: 'Built to last with uncompromising quality.',
    description: 'From foundation to finish, our construction team ensures structural integrity and high-end finishes for residential and commercial projects.'
  },
  {
    id: 'furniture',
    label: 'FURNITURE PRODUCTION',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    title: 'Maecenas sit amet luctus magna, in placerat ante.',
    description: 'Donec non ex elementum, auctor elit Link, vehicula mauris. Etiam varius faucibus tortor quis iaculis. Proin tortor eros, dignissim at velit nec, cursus gravida lectus.'
  },
  {
    id: 'architecture',
    label: 'ARCHITECTURE DESIGN',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop',
    title: 'Innovative architectural solutions for tomorrow.',
    description: 'We blend art and science to design buildings that are iconic yet sustainable. Our approach prioritizes environmental impact and local context.'
  },
  {
    id: 'support',
    label: '24X 7 SUPPORT',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    title: 'Expert guidance through every project phase.',
    description: 'Our dedicated support team is available around the clock to answer questions, provide updates, and ensure your project stays on schedule.'
  }
];

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]); 

  return (
    
    <section className="services-container">
        
      <div className="services-layout">
        
        {/* Left Sidebar Navigation */}
        <nav className="services-nav">
          {servicesData.map((service) => (
            <button
              key={service.id}
              className={`nav-item ${activeTab.id === service.id ? 'active' : ''}`}
              onClick={() => setActiveTab(service)}
            >
              {service.label}
            </button>
          ))}
        </nav>

        {/* Right Content Area */}
        <div className="services-content">
          <div className="image-wrapper">
            <img 
              src={activeTab.image} 
              alt={activeTab.label} 
              className="content-image" 
              key={activeTab.id} 
            />
          </div>
          <div className="text-content">
            <h2 className="content-title">{activeTab.title}</h2>
            <p className="content-desc">{activeTab.description}</p>
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default ServicesTabs;