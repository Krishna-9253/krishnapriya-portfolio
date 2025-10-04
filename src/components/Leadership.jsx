import React, { useEffect, useRef, useState } from 'react';
import styles from './Leadership.module.css';
import '../App.css';

const leaderships = [
  {
    role: "Team Captain, Kho-Kho (CBSE Championships)",
    achievements: [
      "Led team to 1st place (State-Level) and Runner-Up (National-Level) in CBSE Kho-Kho tournaments."
    ]
  }
];

const Leadership = () => {
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
    <section ref={ref} className={`fade-section ${visible ? 'visible' : ''} ${styles.leadership}`} id="leadership">
      <h2>Leadership</h2>
      {leaderships.map((lead, index) => (
        <div key={index} className={`slide-left ${visible ? 'visible' : ''} ${styles.leadCard}`}>
          <h3>{lead.role}</h3>
          <ul>
            {lead.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Leadership;
