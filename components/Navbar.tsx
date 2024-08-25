import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { Asana } from './Types'; // Import the Asana type
import Skeleton from '@mui/material/Skeleton';
interface NavbarProps {
  onAsanaClick: (asana: Asana) => void; // Use the Asana type here
}

const fetchAsanas = async (): Promise<Asana[]> => {
  const response = await fetch('https://raw.githubusercontent.com/amir78729/front-end-roadmap/main/projects/yoga-positions/sample-positions.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Navbar: React.FC<NavbarProps> = ({ onAsanaClick }) => {
  const { data: asanas, error, isLoading, isError } = useQuery<Asana[]>({
    queryKey: ['asanas'],
    queryFn: fetchAsanas,
  });

  if (isLoading) return <div>
     <div className={styles.navbar}>
      <Skeleton variant="text" width={210} height={60} className={styles.skeleton} />
      <Skeleton variant="rectangular" width={210} height={60} className={styles.skeleton} />
      <Skeleton variant="circular" width={40} height={40} className={styles.skeleton} />
    </div>
  </div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleAsanaClick = (e: React.MouseEvent<HTMLAnchorElement>, asana: Asana) => {
    e.preventDefault();
    onAsanaClick(asana);
  };

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>
        <img src="/assets/images/home.png" alt="Home" />
        Introduction
      </Link>
      <div className="flex">
        <input type="search" placeholder="search" className={styles.search} />
        <img src="/assets/images/heart.png" alt="heart" className={styles.heart} />
      </div>

      {asanas.map((asana: Asana) => (
        <Link key={asana.id} href={`/${asana.id}`} className={styles.link} onClick={(e) => handleAsanaClick(e, asana)}>
           
          <img src={asana.icon} className={styles.icon} alt={asana.sanskritName} />
          {asana.sanskritName}
        </Link>
       
      ))}
    </div>
  );
};

export default Navbar;
