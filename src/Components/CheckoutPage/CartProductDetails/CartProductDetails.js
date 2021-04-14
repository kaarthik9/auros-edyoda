import React, { useEffect, useState } from 'react'
import styles from "./CartProductDetails.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function CartProductDetails({ name, price, quantity, path, remove, adjustQty }) {

  let [itemQuantity, setItemQuantity] = useState(0)

  useEffect(() => {
    setItemQuantity(quantity)
  }, [quantity])

  const updateQuantity = (e) => {
    adjustQty(path, parseInt(e.target.value))
  }

  return (
    <div className={styles.productCard}>
      <Link
        to={"/product/" + path}
        className={styles.productImageDiv + " shop-" + path}
      ></Link>

      <div className={styles.productPriceSection}>
        <Link to={"/product/" + path} className={styles.productName}>
          {name}
        </Link>
        <div onClick={() => remove(path)} className={styles.removeIcon}><DeleteOutlined /></div>
        <div className={styles.productPrice}>Price: ${price}.00 USD</div>
        <div className={styles.productQuantity}>
          Quantity: <input type="number" min='1' onChange={updateQuantity} value={itemQuantity} />
        </div>
      </div>
    </div>
  );
}