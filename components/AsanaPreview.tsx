import styles from './AsanaPreview.module.css';
import Link from 'next/link';
const AsanaPreview:React.FC =() =>{
     return(
        <div>
       <div><img src="https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1" className={styles.icon}/>Navasana</div>
       <div className = 'flex flex-col'>
        <p>English Name</p>
        <p>Boat</p>
        <p>Persian Name</p>
        <p>حرکت قایق</p>
        <p>Difficulty</p>
        <div className='flex'>
            <img src='/assets/images/star.png' alt="star" className={styles.star}/>
            <img src='/assets/images/star.png' alt="star" className={styles.star}/>
            <img src='/assets/images/star.png' alt="star" className={styles.star}/>
            <img src='/assets/images/star.png' alt="star" className={styles.star}/>
            <img src='/assets/images/star.png' alt="star" className={styles.star}/>
        </div>

       </div>
        </div>
     )


}
export default AsanaPreview;