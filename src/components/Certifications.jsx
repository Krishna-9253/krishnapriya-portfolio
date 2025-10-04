import React, { useEffect, useRef, useState } from 'react';
import styles from './Certifications.module.css';
import '../App.css';

const certifications = [
  {
    title: "Python AI – Simply Explained",
    platform: "Udemy",
    year: "Sept 2025",
    hours: "34 hours"
  }
];

const Certifications = () => {
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
    <section ref={ref} className={`fade-section ${visible ? 'visible' : ''} ${styles.certifications}`} id="certifications">
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className={`slide-left ${visible ? 'visible' : ''} ${styles.certCard}`}>
          <h3>{cert.title}</h3>
          <p>{cert.platform} | {cert.year} | {cert.hours}</p>
        </div>
      ))}
    </section>
  )
}

export default Certifications;
