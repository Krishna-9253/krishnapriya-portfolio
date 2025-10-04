import React, { useEffect, useRef, useState } from 'react';
import styles from './Education.module.css';
import '../App.css';

const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "St. Aloysius College, Mangalore",
    year: "2022–2024",
    cgpa: "8.44 | 4th Rank in University"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Srinivas University, Mangalore",
    year: "2019–2022",
    cgpa: "9.2 | Top 10 Rank Holder"
  }
];

const Education = () => {
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
    <section ref={ref} className={`fade-section ${visible ? 'visible' : ''} ${styles.education}`} id="education">
      <h2>Education</h2>
      {educations.map((edu, index) => (
        <div key={index} className={`${styles.eduCard} ${index % 2 === 0 ? 'slide-left' : 'slide-right'} ${visible ? 'visible' : ''}`}>
          <h3>{edu.degree}</h3>
          <h4>{edu.college}</h4>
          <span className={styles.year}>{edu.year}</span>
          <p>{edu.cgpa}</p>
        </div>
      ))}
    </section>
  )
}

export default Education;
