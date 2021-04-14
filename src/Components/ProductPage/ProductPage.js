import styles from "./ProductPage.module.css";
import ProductText from "./ProductText/ProductText";
import { useState } from "react";

import getProductsAPI from "../Utilities/productAPI/productAPI";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

function ProductPage(props) {
  let [quantity, setQuantity] = useState(1);

  // Updates quantity
  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const productPath = props.match.params.productName;
  const productsAPI = getProductsAPI()

  let displayedProduct = productsAPI.filter(product => product.path === productPath);
  let { name, price, path, category } = displayedProduct[0]

  document.title = name

  // Adds to cart
  const sendToCart = (e) => {
    e.preventDefault();
    // Add item to cart along with quantity
    props.addToCart({ name, price, path, category }, parseInt(quantity))
    setQuantity(1)
  };

  return (
    <div>
      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.shoppingPageWrapper}>
            <div className={styles.shoppingPageLeft}>
              <div
                className={styles.shoppingPageImage + " shop-" + path}
              ></div>
            </div>

            <div className={styles.shoppingPageRight}>
              <h2 className={styles.productHeading}>{name}</h2>

              <div className={styles.priceWrapper}>
                <div className={styles.shopItemPrice}>
                  $ {price}.00 USD
                </div>
              </div>

              <div>
                <form className={styles.addToCartForm} onSubmit={sendToCart}>
                  <label for="quantity">Quantity</label>

                  <div className={styles.addToCartWrapper}>
                    <input
                      type="number"
                      pattern="^[0-9]+$"
                      inputmode="numeric"
                      id="quantity"
                      min="1"
                      className={styles.quantityInput}
                      value={quantity}
                      onChange={updateQuantity}
                    />

                    <input
                      type="submit"
                      value="Add To Cart"
                      data-loading-text="Adding to cart..."
                      className={styles.addToCartBtn + " btn btn-outline"}
                    />
                  </div>
                </form>
              </div>

              <ProductText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) => { dispatch(addToCart(item, quantity)) }
  }
}


export default connect(null, mapDispatchToProps)(ProductPage)