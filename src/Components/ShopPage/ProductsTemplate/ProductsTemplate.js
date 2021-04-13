import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductsTemplate.module.css'

import {connect} from 'react-redux'
import {addToCart} from '../../../redux/Shopping/shopping-actions'

function ProductsTemplate({name, price, path, category, addToCart}) {


  return (
    <>
      <div className={styles.productCard}>
        <Link to={"/product/"+ path} className={styles.productImage+" shop-"+path}></Link>
        <Link to={"/product/"+ path} className={styles.productName}>{name}</Link>
        <div className={styles.productPrice}>${price}.00 USD</div>
        <button onClick={() => addToCart({name, price, path, category})} className={styles.productBtn+" btn btn-primary"}>
          Add to Cart
        </button>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(null, mapDispatchToProps)(ProductsTemplate);