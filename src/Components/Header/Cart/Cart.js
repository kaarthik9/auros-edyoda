import React from "react";
import styles from "./Cart.module.css";
import { Popover, Button } from "antd";
import CartContainer from "./CartContainer/CartContainer";

export default function Cart() {
  const text = <span>Cart Items:</span>;
  const content = CartContainer;

  return (
    <div className={styles.cartContainer}>
      <Popover
        placement="bottom"
        title={text}
        content={CartContainer}
        trigger="click"
      >
        <div onClick={() => {}} className={styles.cart}>
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
            className={styles.cartIcon}
          />
          {/* SUBSCRIBE */}
          <div className={styles.cartQuantity}>2</div>
        </div>
      </Popover>
    </div>
  );
}
