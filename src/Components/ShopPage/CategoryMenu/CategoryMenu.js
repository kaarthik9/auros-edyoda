import React from "react";
import styles from "./CategoryMenu.module.css";
import { Link } from "react-router-dom";

export default function CategoryMenu() {
  return (
    <div className={styles.shopCategoryMenu}>
      <h2 className={styles.heading}>Shop By Category</h2>
      <div>
      <div className={styles.menuItem}>
          <Link
            className={styles.menuBtn}
            to="/shop"
          >
            All
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link
            className={styles.menuBtn}
            to="/category/living"
          >
            Living Room
          </Link>
        </div>

        <div className={styles.menuItem}>
          <Link
            className={styles.menuBtn}
            to="/category/kitchen"
          >
            Kitchen
          </Link>
        </div>
      </div>
    </div>
  );
}
