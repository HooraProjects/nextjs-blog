import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

interface NavbarProps {
  onNavasanaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavasanaClick }) => {
  const handleNavasanaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavasanaClick();
  };

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>
        <img src="/assets/images/home.png" alt="Home" />
        Introduction
      </Link>
      <input type="search" placeholder="search" className={styles.search} />
      <Link href="#" className={styles.link} onClick={handleNavasanaClick}>
        <img src="https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1" className={styles.icon} alt="Navasana" />
        Navasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1" className={styles.icon} alt="Ardha Navasana" />
        Ardha Navasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1" className={styles.icon} alt="Dhanurasana" />
        Dhanurasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1" className={styles.icon} alt="Setu Bandha Sarvangasana" />
        Setu Bandha Sarvangasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1" className={styles.icon} alt="Baddha Konasana" />
        Baddha Konasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1" className={styles.icon} alt="Ustrasana" />
        Ustrasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/cginnz98of2jpgr/cat.svg?raw=1" className={styles.icon} alt="Marjaryasana" />
        Marjaryasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1" className={styles.icon} alt="Bitilasana" />
        Bitilasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1" className={styles.icon} alt="Utkatasana" />
        Utkatasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/ini3uwali0q5gxa/child.svg?raw=1" className={styles.icon} alt="Balasana" />
        Balasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/eohyx2crvtjvaxb/sivasana.svg?raw=1" className={styles.icon} alt="Savasana" />
        Savasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/1oc1dqv8mfwo8uj/highlunge.svg?raw=1" className={styles.icon} alt="Alanasana" />
        Alanasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/ukaxoioh0uooswj/crow.svg?raw=1" className={styles.icon} alt="Bakasana" />
        Bakasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/px1foombb3v24se/dolphin.svg?raw=1" className={styles.icon} alt="Ardha Pincha Mayurasana" />
        Ardha Pincha Mayurasana
      </Link>
      <Link href="#" className={styles.link}>
        <img src="https://www.dropbox.com/s/75xa1bduu2u5y7d/downdog.svg?raw=1" className={styles.icon} alt="Adho Mukha Svanasana" />
        Adho Mukha Svanasana
      </Link>
    </div>
  );
};

export default Navbar;

