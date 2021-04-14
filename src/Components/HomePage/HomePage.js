import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import styles from './HomePage.module.css'
import { Link } from "react-router-dom";
import ShopChart from './ShopChart/ShopChart';


export default function HomePage() {
  
  document.title = "Auros"

  return (
    <div className="custom-container">
      <HeroSection />

      <ShopChart />

      <div className={styles.shopImageContainer}>
        <Link to="/category/living" className={styles.shopImage}>
          <div className={styles.shopImageDiv + " " + styles.shopLiving + " shop-lamp"}>
            <div className={styles.shopImageText}>
              Living Room
            </div>
          </div>
        </Link>

        <Link to="/category/kitchen" className={styles.shopImage}>
          <div className={styles.shopImageDiv + " " + styles.shopKitchen + " shop-table"}>
            <div className={styles.shopImageText}>
              Kitchen
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
