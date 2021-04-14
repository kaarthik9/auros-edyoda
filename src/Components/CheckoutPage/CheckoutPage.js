import React from "react";
import CartProductDetails from "./CartProductDetails/CartProductDetails";
import styles from "./CheckoutPage.module.css";
import PricingSection from "./PricingSection/PricingSection";

import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../redux/Shopping/shopping-actions";

function CheckoutPage({ cart, remove, adjustQty }) {

  document.title = "Checkout"
  if (cart.length === 0) {
    return (
      <div className={styles.checkoutPageWrapper}>
        <h1 style={{ alignSelf: "center", margin: "0px auto" }}>
          No Items In The Cart
        </h1>
      </div>
    );
  }

  let totalAmount = 0;
  cart.forEach(({ price, quantity }) => (totalAmount += price * quantity));

  return (
    <div className={styles.checkoutPageWrapper}>
      {/* PRODUCT DETAILS */}
      <div className={styles.productDetailsSection}>
        {cart.map(({ name, quantity, price, path }) => {
          return (
            <CartProductDetails
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
      </div>

      {/* PRICING */}
      <div className={styles.priceSection}>
        <PricingSection totalAmount={totalAmount} />
      </div>
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
    remove: (path) => { dispatch(removeFromCart(path)) },
    adjustQty: (path, quantity) => { dispatch(adjustQty(path, quantity)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
