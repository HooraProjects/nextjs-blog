import React from 'react';
import styles from './AsanaPreview.module.css';
import Link from 'next/Link';
import Difficulty from './Difficulty';
interface AsanaPreviewProps {
  asana: { 
    id: number; 
    image: string; 
    text: string; 
    video: string;
    sanskritName: string;
    persianName: string;
    englishName:string;
    icon:string;
  };
}


  const AsanaPreview: React.FC<AsanaPreviewProps> = ({ asana }) => {
    // Ensure the video URL is in the correct format
    const videoUrl = asana.video;
const id = videoUrl.split('v=')[1].split('&')[0];


  return (
    <div className='flex'>
      <div>
        <img src={asana.icon} className={styles.icon} alt={asana.text} />
        {asana.sanskritName}
        <img src="/assets/images/heart.png" alt="heart" className={styles.heart} />
      </div>
      <div className='flex flex-col'>
        <p >English Name</p>
        <p>{asana.englishName}</p>
        <p>Persian Name</p>
        <p>{asana.persianName}</p>
        <p>Difficulty</p>
        <Difficulty level={asana.difficulty}/>
      </div>
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
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
