import React from "react";
import styles from "./CartContainer.module.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../../../redux/Shopping/shopping-actions";

function CartContainer({ cart, remove, adjustQty }) {
  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <h1 style={{ textAlign: "center" }}>No Items In Cart</h1>
      </div>
    );
  }
  return (
    <div className={styles.cartContainer}>
      {cart.map(({ name, quantity, price, path }) => {
        return (
          <ProductCard
            name={name}
            quantity={quantity}
            price={price}
            path={path}
            key={path}
            remove={remove}
            adjustQty={adjustQty}
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

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (path) => {dispatch(removeFromCart(path))},
    adjustQty: (path, quantity) => {dispatch(adjustQty(path, quantity))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
