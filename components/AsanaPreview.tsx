import React from 'react';
import styles from './AsanaPreview.module.css';
import Link from 'next/link';
import Difficulty from './Difficulty';

interface AsanaPreviewProps {
  asana: {
    id: number;
    image: string;
    text: string;
    video: string;
    sanskritName: string;
    persianName: string;
    englishName: string;
    icon: string;
    difficulty: string; // Assuming difficulty is a string, update if different
  };
}

const AsanaPreview: React.FC<AsanaPreviewProps> = ({ asana }) => {
  // Ensure the video URL is in the correct format
  const videoUrl = asana.video;
  let videoId = '';

  if (videoUrl) {
    // Check if the videoUrl contains 'v='
    const urlParts = videoUrl.split('v=');
    if (urlParts.length > 1) {
      videoId = urlParts[1].split('&')[0]; // Extract the video ID
    }
  }

  return (
    <div className='flex'>
      <div>
        <img src={asana.icon} className={styles.icon} alt={asana.text} />
        {asana.sanskritName}
        <img src='/assets/images/heart.png' alt='heart' className={styles.heart} />
      </div>
      <div className='flex flex-col'>
        <p>English Name</p>
        <p>{asana.englishName}</p>
        <p>Persian Name</p>
        <p>{asana.persianName}</p>
        <p>Difficulty</p>
        <Difficulty level={asana.difficulty} />
      </div>
      <div className='video-responsive'>
        {videoId ? ( // Check if videoId is not empty
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        ) : (
          <p>No video available</p> // Display a message if no video is available
        )}
      </div>
    </div>
  );
};

export default AsanaPreview;

