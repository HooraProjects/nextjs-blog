import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/Link';

interface NavbarProps {
  onAsanaClick: (asana: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAsanaClick }) => {
  const asanas = [
    { id: 1, image: 'https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1', text: 'Navasana',persianName:'حرکت قایق',videoUrl:'https://www.youtube.com/embed/QVEINjrYUPU?si=HkuGhsXS12NnXuaf' },
    { id: 2, image: 'https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1', text: 'Ardha Navasana',persianName:'حرکت قایق نیمه',videoUrl:'https://www.youtube.com/embed/0495rbXZMQg?si=ChdD-ALoZRdesLA8' },
    { id: 3, image: 'https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1', text: 'Dhanurasana',persianName:'حرکت کمان',videoUrl:'https://www.youtube.com/embed/CZGtSaOvb50?si=6-5t00VDS8WWzQ0n' },
    { id: 4, image: 'https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1', text: 'Setu Bandha Sarvangasana' ,persianName:'پل',videoUrl:''},
    { id: 5, image: 'https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1', text: 'Baddha Konasana',persianName:'پروانه',videoUrl:'' },
    { id: 6, image: 'https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1', text: 'Ustrasana',persianName:'-' ,videoUrl:'https://www.youtube.com/embed/_NNnowkcIqU?si=k1R3_IOsJ6Ewzypw'},
    { id: 7, image: 'https://www.dropbox.com/s/cginnz98of2jpgr/cat.svg?raw=1', text: 'Marjaryasana',persianName:'گربه',videoUrl:'https://www.youtube.com/embed/LGLIyrfTiUc?si=ey9Yn2b3BXtDQtHo' },
    { id: 8, image: 'https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1', text: 'Bitilasana',persianName:'گاو',videoUrl:'' },
    { id: 9, image: 'https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1', text: 'Utkatasana',persianName:'-',videoUrl:'https://www.youtube.com/embed/W5KVx0ZbB_4?si=lsvUoejz4yEOWLFG' },
    { id: 10, image: 'https://www.dropbox.com/s/ini3uwali0q5gxa/child.svg?raw=1', text: 'Balasana',persianName:'کودک',videoUrl:'' },
    { id: 11, image: 'https://www.dropbox.com/s/eohyx2crvtjvaxb/sivasana.svg?raw=1', text: 'Savasana',persianName:'جسم بی جان',videoUrl:'https://www.youtube.com/embed/1VYlOKUdylM?si=NSxdc8Dg-EcrCAfP' },
    { id: 12, image: 'https://www.dropbox.com/s/1oc1dqv8mfwo8uj/highlunge.svg?raw=1', text: 'Alanasana',persianName:'-',videoUrl:'https://www.youtube.com/embed/zaongQlYTto?si=OCSc3gOdRASVsmjd' },
    { id: 13, image: 'https://www.dropbox.com/s/ukaxoioh0uooswj/crow.svg?raw=1', text: 'Bakasana',persianName:'کلاغ',videoUrl:'https://www.youtube.com/embed/ja2eab4sWlM?si=NJ8jS7Vq9SlkJG-k' },
    { id: 14, image: 'https://www.dropbox.com/s/px1foombb3v24se/dolphin.svg?raw=1', text: 'Ardha Pincha Mayurasana',persianName:'دلفین',videoUrl:'https://www.youtube.com/embed/YFm6FVGtbMk?si=lGIvfPtntxsHTIia' },
    { id: 15, image: 'https://www.dropbox.com/s/75xa1bduu2u5y7d/downdog.svg?raw=1', text: 'Adho Mukha Svanasana',persianName:'سگ سر پایین',videoUrl:'https://www.youtube.com/embed/EC7RGJ975iM?si=3ASYQaeEMOOIVAXs' }
  ];

  const handleAsanaClick = (e: React.MouseEvent<HTMLAnchorElement>, asana) => {
    e.preventDefault();
    onAsanaClick(asana);
  };

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.link}>
        <img src="/assets/images/home.png" alt="Home" />
        Introduction
      </Link>
      <div className='flex'>
        <input type="search" placeholder="search" className={styles.search} />
        <img src="/assets/images/heart.png" alt="heart" className={styles.heart}/>
      </div>
      
      {asanas.map(asana => (
        <Link key={asana.id} href="#" className={styles.link} onClick={(e) => handleAsanaClick(e, asana)}>
          <img src={asana.image} className={styles.icon} alt={asana.text} />
          {asana.text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;


