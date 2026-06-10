import React from 'react';
import styles from './RelatedWorks.module.css';

const WORKS_DATA = [
  {
    id: 1,
    category: "INTERIOR DESIGN",
    title: "Modern House",
    location: "Interior New York",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "INTERIOR DESIGN",
    title: "Modern House",
    location: "Interior New York",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "INTERIOR DESIGN",
    title: "Modern House",
    location: "Interior New York",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  }
];

export default function RelatedWorks() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.bgGrid}>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
      </div>

      {/* Header Area */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          RELATED <span className={styles.titleGold}>WORKS</span>
        </h2>
        <div className={styles.zigzagContainer}>
          <svg 
            className={styles.zigzag} 
            viewBox="0 0 40 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 5 L5 1 L10 5 L15 1 L20 5 L25 1 L30 5 L35 1 L40 5" 
              stroke="#c5a880" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className={styles.cardsGrid}>
        {WORKS_DATA.map((work) => (
          <div key={work.id} className={styles.card}>

            <div className={styles.imageWrapper}>
              <img 
                src={work.image} 
                alt={`${work.title} ${work.location}`} 
                className={styles.cardImage} 
              />
              <div className={styles.darkOverlay}></div>
            </div>

            <div className={styles.hoverButton}>
              <span className={styles.plusIcon}>+</span>
            </div>

            {/* Vertical Category Tag */}
            <span className={styles.categoryVertical}>
              {work.category}
            </span>

            {/* Bottom Text Content */}
            <div className={styles.textContainer}>
              <h3 className={work.titleClass || styles.cardTitle}>
                {work.title}
              </h3>
              <p className={styles.cardLocation}>
                {work.location}
              </p>
            </div>
          </div>
        ))}
      </div>

     
      
    </section>
  );
}