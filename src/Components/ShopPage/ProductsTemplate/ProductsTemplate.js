import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductsTemplate.module.css'

export default function ProductsTemplate({category}) {
  return (
    <>
      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-lamp"}></div>
        <div className={styles.productPrice}>$3.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>

      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-lamp"}></div>
        <div className={styles.productPrice}>$3.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>

      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-lamp"}></div>
        <div className={styles.productPrice}>$3.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>

      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-lamp"}></div>
        <div className={styles.productPrice}>$3.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>

      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-lamp"}></div>
        <div className={styles.productPrice}>$3.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>

      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-lamp"}></div>
        <div className={styles.productPrice}>$3.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>
    </>
  )
}
