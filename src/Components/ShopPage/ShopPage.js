import React from "react";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import HeroSmall from "./HeroSmall/HeroSmall";
import ProductsTemplate from "./ProductsTemplate/ProductsTemplate";
import styles from "./ShopPage.module.css";

export default function ShopPage() {
  return (
    <div>
      <HeroSmall />

      <div className={styles.shopSectionWrapper}>
        <div className={styles.shopSection}>
          <div className={styles.filterSection}>
            <CategoryMenu />
          </div>
          <div className={styles.shopItemsSection}>
            <ProductsTemplate />
          </div>
        </div>
      </div>
    </div>
  );
}
