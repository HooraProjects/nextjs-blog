// components/Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

interface NavbarProps {
  onAsanaClick: (asana: any) => void;
}

const fetchAsanas = async () => {
  const response = await fetch('https://raw.githubusercontent.com/amir78729/front-end-roadmap/main/projects/yoga-positions/sample-positions.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Navbar: React.FC<NavbarProps> = ({ onAsanaClick }) => {
  const { data: asanas, error, isLoading, isError } = useQuery({
    queryKey: ['asanas'],
    queryFn: fetchAsanas,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleAsanaClick = (e: React.MouseEvent<HTMLAnchorElement>, asana: any) => {
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

      {asanas.map((asana: any) => (
        <Link key={asana.id} href="#" className={styles.link} onClick={(e) => handleAsanaClick(e, asana)}>
          <img src={asana.icon} className={styles.icon} alt={asana.text} />
          {asana.sanskritName}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;