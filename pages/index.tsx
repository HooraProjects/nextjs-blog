import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <img src="/assets/images/yoga2.jpg" alt="yoga-pose" />
      <h1 className="font-mono">Yoga Pose</h1>
      <p className="font-mono">a collection of yoga positions</p>
    </div>
  );
};

export default Home;
