import React from "react";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import HeroSmall from "./HeroSmall/HeroSmall";
import ProductsTemplate from "./ProductsTemplate/ProductsTemplate";
import styles from "./ShopPage.module.css";

import getProductsAPI from "../Utilities/productAPI/productAPI";

const productsAPI = getProductsAPI();

export default function ShopPage({ showByCategory }) {
  
  let products, productsAPICopy;
  if(showByCategory) {
    productsAPICopy = productsAPI.filter(({category}) => category === showByCategory)
  } else {
    productsAPICopy = [...productsAPI]
  }

  products = productsAPICopy.map(({ name, price, path, category }) => {
    return (
      <ProductsTemplate
        name={name}
        price={price}
        path={path}
        category={category}
        key={path}
      />
    );
  });
  return (
    <div>
      <HeroSmall />

      <div className={styles.shopSectionWrapper}>
        <div className={styles.shopSection}>
          <div className={styles.filterSection}>
            <CategoryMenu />
          </div>
          <div className={styles.shopItemsSection}>{products}</div>
        </div>
      </div>
    </div>
  );
}
