import React from 'react';
import styles from './Difficulty.module.css';

interface DifficultyProps {
  level: number; // Assuming difficulty level is a number from 1 to 5
}

const Difficulty: React.FC<DifficultyProps> = ({ level }) => {
  const stars = [];
  
  for (let i = 0; i < 5; i++) {
    if (i < level) {
      stars.push(<img key={i} src="/assets/images/star-full.jpg" className={styles.star} alt="star" />);
    } else {
      stars.push(<img key={i} src="/assets/images/star.png" className={styles.star} alt="empty star" />);
    }
  }

  return <div className={styles.starsContainer}>{stars}</div>;
};

export default Difficulty;
