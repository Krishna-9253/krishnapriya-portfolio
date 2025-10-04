import React, { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import '../App.css';

const Contact = () => {
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
    <section ref={ref} className={`fade-section ${visible ? 'visible' : ''} ${styles.contact}`} id="contact">
      <h2>Contact</h2>
      <p>Email: krishnaiduvungal@gmail.com</p>
      <p>Phone: +971 547812105</p>
      <p>Location: Dubai, UAE</p>
    </section>
  )
}

export default Contact;
