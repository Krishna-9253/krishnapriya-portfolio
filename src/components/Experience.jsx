import React, { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';
import '../App.css'; // contains fade-section & slide-left/right

const experiences = [
  {
    role: "Full Stack Developer (Contract) | ERP/CRM System Development",
    company: "Volume Space Interiors LLC, Dubai, UAE",
    duration: "Sept 2025 - Present",
    details: [
      "Developed a custom ERP/CRM platform tailored to the interior design industry",
      "Designed and launched a mobile-responsive client portal",
      "Implemented role-based access control",
      "Built a Room Visualizer tool",
      "Automated feedback loops",
      "Created data analytics dashboards",
      "Collaborated with designers, sales, and IT teams in an Agile environment"
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Zieers Systems Pvt Ltd, Kerala, India",
    duration: "Apr 2024 – Aug 2024",
    details: [
      "Built a workflow management platform for a video editing company",
      "Developed key features: user registration, secure login",
      "Created admin and employee dashboards",
      "Managed backend using MongoDB and ensured robust REST API communication",
      "Conducted functional testing, debugging, and API documentation",
      "Stack: React.js, Node.js, Express.js, MongoDB, MySQL, HTML5, CSS3, Bootstrap"
    ]
  }
];

const Experience = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.1 });

    observer.observe(ref.current);
  }, []);

  return (
    <section ref={ref} className={`fade-section ${visible ? 'visible' : ''} ${styles.experience}`} id="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className={`${styles.expCard} ${index % 2 === 0 ? 'slide-left' : 'slide-right'} ${visible ? 'visible' : ''}`}
        >
          <h3>{exp.role}</h3>
          <h4>{exp.company}</h4>
          <span className={styles.duration}>{exp.duration}</span>
          <ul>
            {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Experience;
