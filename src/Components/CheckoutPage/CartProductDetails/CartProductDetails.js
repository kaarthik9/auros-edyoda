import React from "react";
import styles from "./CartProductDetails.module.css";
import { InputNumber } from "antd";
import { Link } from "react-router-dom";

export default function CartProductDetails({ name, price, quantity, path }) {
  return (
    <div className={styles.productCard}>
      <Link to={"/product/" + path} className={styles.productImageDiv + " shop-" + path}></Link>

      <div className={styles.productPriceSection}>
        <Link to={"/product/" + path} className={styles.productName}>{name}</Link>
        <div className={styles.productPrice}>Price: ${price}.00 USD</div>
        <div className={styles.productQuantity}>
          Quantity: <InputNumber min={1} max={10} defaultValue={quantity} />
        </div>
      </div>
    </div>
  );
}
