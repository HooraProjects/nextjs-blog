import React from 'react';
import styles from './Difficulty.module.css';
const Difficulty: React.FC=()=>{
    return(
        <div className='flex'>

          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
        </div>
    )
    
}
export default Difficulty;