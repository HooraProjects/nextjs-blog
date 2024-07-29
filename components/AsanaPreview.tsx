import React from 'react';
import styles from './AsanaPreview.module.css';
import Link from 'next/Link';
interface AsanaPreviewProps {
  asana: { id: number; image: string; text: string };
}

const AsanaPreview: React.FC<AsanaPreviewProps> = ({ asana }) => {
  return (
    <div className='flex'>
      <div>
        <img src={asana.image} className={styles.icon} alt={asana.text} />
        {asana.text}
        <img src="/assets/images/heart.png" alt="heart" className={styles.heart} />
      </div>
      <div className='flex flex-col'>
        <p >English Name</p>
        <p>{asana.text}</p>
        <p>Persian Name</p>
        <p>{asana.persianName}</p>
        <p>Difficulty</p>
        <div className='flex'>
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
          <img src='/assets/images/star.png' alt="star" className={styles.star} />
        </div>
      </div>
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={asana.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AsanaPreview;
