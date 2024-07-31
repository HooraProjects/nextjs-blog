import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AsanaPreview from '../components/AsanaPreview';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [selectedAsana, setSelectedAsana] = useState(null);

  const handleAsanaClick = (asana) => {
    setSelectedAsana(asana);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar onAsanaClick={handleAsanaClick} />
      </div>
      <div className={styles.contentContainer}>
        {selectedAsana ? (
          <AsanaPreview asana={selectedAsana}/>
        ) : (
          <div className={styles.defaultContent}>
            <img src="/assets/images/yoga2.jpg" alt="yoga-pose" />
            <h1 className="font-mono">Yoga Pose</h1>
            <p className="font-mono">a collection of yoga positions</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


