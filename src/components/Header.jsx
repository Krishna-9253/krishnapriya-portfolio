import React from 'react';
import styles from './Header.module.css';
import profilePic from '../assets/profile.jpg'; // keep profile image in src/assets

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={profilePic} alt="Krishnapriya" className={styles.profile} />
      <h1>Krishnapriya B</h1>
      <p>Full Stack Developer | MERN Stack Developer</p>
      <p>Dubai, UAE | +971 547812105 | krishnaiduvungal@gmail.com</p>
      
      <div className={styles.cvButtons}>
        {/* Opens CV in a new tab */}
        <a 
          href="/KrishnapriyaCV_.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.cvButton}
        >
          View CV
        </a>

        {/* Forces download of CV */}
        <a 
          href="/KrishnapriyaCV_.pdf" 
          download 
          className={styles.cvButton}
        >
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Header;
