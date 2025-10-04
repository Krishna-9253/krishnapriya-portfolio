import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        setVisible(true);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.1 });

    observer.observe(ref.current);
  }, []);

  return (
    <section id="about" ref={ref} className={`${styles.about} fade-section ${visible ? 'visible' : ''}`}>
      <h2>About Me</h2>
      <p>
        Detail-oriented and motivated Full Stack Developer with hands-on experience building scalable web applications using the MERN stack...
      </p>
    </section>
  )
}

export default About;
