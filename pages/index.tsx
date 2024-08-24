// pages/index.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AsanaPreview from '../components/AsanaPreview';
import styles from '../styles/Home.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Asana } from '../components/types'; // Import the Asana type

const Home: React.FC = () => {
  const [selectedAsana, setSelectedAsana] = useState<Asana | null>(null); // Update state type to Asana or null
  const queryClient = new QueryClient();

  const handleAsanaClick = (asana: Asana) => { // Use Asana type here
    setSelectedAsana(asana);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <div className={styles.navbarContainer}>
          <Navbar onAsanaClick={handleAsanaClick} />
        </div>
        <div className={styles.contentContainer}>
          {selectedAsana ? (
            <AsanaPreview asana={selectedAsana} />
          ) : (
            <div className={styles.defaultContent}>
              <img src="/assets/images/yoga2.jpg" alt="yoga-pose" />
              <h1 className="font-mono">Yoga Pose</h1>
              <p className="font-mono">A collection of yoga positions</p>
            </div>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Home;
