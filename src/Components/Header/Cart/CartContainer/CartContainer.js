import React from "react";
import styles from "./CartContainer.module.css";
import { InputNumber } from "antd";
import { Link } from "react-router-dom";
import getProductsAPI from "../../../Utilities/productAPI/productAPI";

const productsAPI = getProductsAPI();
let { name, price, path } = productsAPI[0];
let quantity = 1;

export default function CartContainer() {
  return <div className={styles.cartContainer}>
    <ProductCard />
    <ProductCard />
    <ProductCard />

    <Link to="/checkout" className={styles.checkoutButton+" btn btn-primary"}>
      Checkout
    </Link>
  </div>;
}

function ProductCard() {
  return (
    <div>
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
    </div>
  );
}
