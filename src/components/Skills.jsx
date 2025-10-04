import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import '../App.css';

const skills = [
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "Agile (Scrum)", level: 75 },
  { name: "Responsive Design", level: 90 },
  { name: "RBAC", level: 80 }
];

const Skills = () => {
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
    <section ref={ref} className={`fade-section ${visible ? 'visible' : ''} ${styles.skills}`} id="skills">
      <h2>Skills</h2>

      {/* Floating particles */}
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={styles.particle}></span>
        ))}
      </div>

      <div className={styles.skillList}>
        {skills.map((skill, index) => (
          <div key={index} className={`${styles.skillCard} ${visible ? 'slide-left visible' : 'slide-left'}`}>
            <span className={styles.skillName}>{skill.name}</span>
            <div className={styles.bar}>
              <div 
                className={styles.progress} 
                style={{ width: visible ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
