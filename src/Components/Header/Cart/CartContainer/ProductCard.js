import React from 'react'
import { Link } from "react-router-dom";
import { InputNumber } from "antd";
import styles from "./CartContainer.module.css";

export default function ProductCard({ name, price, path, quantity }) {
  return (
    <>
      <div className={styles.productCard}>
        <Link
          to={"/product/" + path}
          className={styles.productImageDiv + " shop-" + path}
        ></Link>

        <div className={styles.productPriceSection}>
          <Link to={"/product/" + path} className={styles.productName}>
            {name}
          </Link>
          <div className={styles.productPrice}>Price: ${price}.00 USD</div>
          <div className={styles.productQuantity}>
            Quantity: <InputNumber min={1} max={10} defaultValue={quantity} />
          </div>
        </div>
      </div>
    </>
  );
}
