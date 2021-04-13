import React from "react";
import {useEffect} from "react"
import styles from "./CartContainer.module.css";
import { InputNumber } from "antd";
import { Link } from "react-router-dom";
import getProductsAPI from "../../../Utilities/productAPI/productAPI";

import { connect } from "react-redux";
import ProductCard from "./ProductCard";

function CartContainer({cart}) {

  // useEffect(() => {

  // }, [cart])

  return (
    <div className={styles.cartContainer}>
      {cart.length > 0 &&
        cart.map(({ name, quantity, price, path }) => {
          return (
            <ProductCard
              name={name}
              quantity={quantity}
              price={price}
              path={path}
              key={path}
            />
          );
        })}

      <Link
        to="/checkout"
        className={styles.checkoutButton + " btn btn-primary"}
      >
        Checkout
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(CartContainer);
