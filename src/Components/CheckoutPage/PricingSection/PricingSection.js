import React from 'react'
import styles from './PricingSection.module.css'

export default function PricingSection({totalAmount}) {
  return (
    <div className={styles.pricingSectionDiv}>
      <div className={styles.pricingHeading}>
        Total Amount:
      </div>
      <div className={styles.price}>$ {totalAmount}.00 USD</div>
      <button className={styles.checkoutButton+" btn btn-warning"}>
        Proceed Payment
      </button>
    </div>
  )
}
