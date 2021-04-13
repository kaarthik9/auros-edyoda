import React from "react";
import styles from "./Cart.module.css";
import { Popover, Button } from "antd";
import CartContainer from "./CartContainer/CartContainer";

import {connect} from "react-redux"
import Content from "./CartContainer/Content";

// console.log(CartContainer)

function Cart({cartLength}) {
  const text = <span>Cart Items:</span>;
  const content = Content;

  return (
    <div className={styles.cartContainer}>
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        
        <div className={styles.cart}>
          <img
            src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
            className={styles.cartIcon}
          />
          {/* SUBSCRIBE */}
          <div className={styles.cartQuantity}>{cartLength}</div>
        </div>
      </Popover>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.shop.cart.length
  }
}


export default connect(mapStateToProps)(Cart);