import React from 'react'
import getProductsAPI from "../Utilities/productAPI/productAPI";
import CartProductDetails from './CartProductDetails/CartProductDetails';
import styles from "./CheckoutPage.module.css"
import PricingSection from './PricingSection/PricingSection';

export default function CheckoutPage() {

  const productsAPI = getProductsAPI()
  let {name, price, path} = productsAPI[0]

  return (
    <div className={styles.checkoutPageWrapper}>
      {/* PRODUCT DETAILS */}
      <div className={styles.productDetailsSection}>
        <CartProductDetails quantity='1' path={path} name={name} price={price} />
        <CartProductDetails quantity='1' path={path} name={name} price={price} />
        <CartProductDetails quantity='1' path={path} name={name} price={price} />
      </div>

      {/* PRICING */}
      <div className={styles.priceSection}>
        <PricingSection />
      </div>
    </div>
  )
}
