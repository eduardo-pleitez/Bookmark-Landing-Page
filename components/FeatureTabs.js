import {useState} from "react";
import Image from "next/image";
import styles from '../styles/Home.module.scss'


function FeatureTabs(){
const [toggleTabState, setToggleTabState] = useState(1);

const toggleTab = (index) => {
  setToggleTabState(index);
}

return (
  <>
    <div className={styles.featuresList}>
      <button className={toggleTabState === 1 ? styles.featureButtonActive : styles.featureButton} onClick={() => toggleTab(1)}>Simple Bookmarking</button>
      <button className={toggleTabState === 2 ? styles.featureButtonActive : styles.featureButton} onClick={() => toggleTab(2)}>Speedy Searching</button>
      <button className={toggleTabState === 3 ? styles.featureButtonActive : styles.featureButton} onClick={() => toggleTab(3)}>Easy Sharing</button>
    </div>
  
    <div className={toggleTabState === 1 ? styles.featureTabActive : styles.featureTab}>
      <div className={styles.featureTabLeft}>
        <div style={{ position: 'relative', width: '550px', height:'350px' }}>
          <Image src="/images/illustration-features-tab-1.svg" layout="fill" alt="Simple Bookmarking Image" />
        </div>
      </div>
      <div className={styles.featureTabRight}>
        <h2>Bookmark in one click</h2>
        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you 
        complete control over how you manage your favourite sites.</p>
        <button>More Info</button>
      </div>
    </div>
    <div className={toggleTabState === 2 ? styles.featureTabActive : styles.featureTab}>
      <div className={styles.featureTabLeft}>
        <div style={{ position: 'relative', width: '550px', height:'350px' }}>
          <Image src="/images/illustration-features-tab-2.svg" layout="fill" alt="Speedy Searching Image" />
        </div>
      </div>
      <div className={styles.featureTabRight}>
        <h2>Intelligent search</h2>
        <p>Our powerful search feature will help you find saved sites in no time at all. No need 
          to trawl through all of your bookmarks.</p>
        <button>More Info</button>
      </div>
    </div>
    <div className={toggleTabState === 3 ? styles.featureTabActive : styles.featureTab}>
      <div className={styles.featureTabLeft}>
        <div style={{ position: 'relative', width: '550px', height:'350px' }}>
         <Image src="/images/illustration-features-tab-3.svg" layout="fill" alt="Easy Sharing Image" />
        </div>
      </div>
      <div className={styles.featureTabRight}>
        <h2>Share your bookmarks</h2>
        <p>Easily share your bookmarks and collections with others. Create a shareable link that 
          you can send at the click of a button.</p>
        <button>More Info</button>
      </div>
    </div>
  </>

)
}

export default FeatureTabs;