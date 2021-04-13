import * as actionTypes from "./shopping-types"

export const addToCart = (payload) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload
  }
}

export const removeFromCart = (path) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: path
  }
}

export const adjustQty = (path, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      path,
      value
    }
  }
}