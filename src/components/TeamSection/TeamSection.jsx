import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import 'swiper/css';
import styles from './TeamSection.module.css';

const TeamSection = () => {
  const swiperRef = useRef(null);

  const teamMembers = [
    { id: 1, name: "Lala Rose", role: "DIRECTOR", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" },
    { id: 2, name: "Andrey Carol", role: "DIRECTOR", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
    { id: 3, name: "Rebecca Ruth", role: "DIRECTOR", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" },
    { id: 4, name: "Marc Smith", role: "DIRECTOR", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" },
    { id: 5, name: "Julia Vance", role: "DESIGNER", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" },
    { id: 6, name: "Kane West", role: "MANAGER", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" },
    { id: 7, name: "Sasha Grey", role: "ARTIST", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop" },
    { id: 8, name: "Leo Das", role: "PRODUCER", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&auto=format&fit=crop" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>
            CREATIVE <span className={styles.accent}>EXPERTISE</span>
          </h2>
          <div className={styles.navButtons}>
            <button
              className={styles.navBtn}
              aria-label="Previous slide"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              className={styles.navBtn}
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className={styles.separator}>
          <svg width="60" height="10" viewBox="0 0 60 10">
            <path d="M0 5L5 0L10 5L15 10L20 5L25 0L30 5L35 10L40 5L45 0L50 5L55 10L60 5"
              stroke="#C5A27D" fill="none" strokeWidth="2" />
          </svg>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className={styles.swiperWrapper}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={member.id}>
              <div className={styles.card} data-even={index % 2 === 0 ? "true" : "false"}>
                <div className={styles.imageWrapper}>
                  <img src={member.image} alt={member.name} className={styles.image} />
                  <div className={styles.socialOverlay}>
                    <div className={styles.iconBox}><FaFacebookF /></div>
                    <div className={styles.iconBox}><FaInstagram /></div>
                    <div className={styles.iconBox}><FaTwitter /></div>
                    <div className={styles.iconBox}><FaYoutube /></div>
                  </div>
                </div>
                <div className={styles.infoBox}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;