import * as actionTypes from "./shopping-types"

export const addToCart = (item, quantity=1) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      item,
      quantity
    }
  }
}

export const removeFromCart = (path) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      path: path
    }
  }
}

export const adjustQty = (path, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      path: path,
      value: value
    }
  }
}