import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductsTemplate.module.css'

export default function ProductsTemplate({name, price, path, category}) {
  return (
    <>
      <Link className={styles.productCard}>
        <div className={styles.productImage+" shop-"+path}></div>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productPrice}>${price}.00 USD</div>
        <button className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </Link>
    </>
  )
}
