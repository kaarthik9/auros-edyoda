import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  cart: [], // {name, price, path, quantity}
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return {};

    case actionTypes.REMOVE_FROM_CART:
      return {};

    case actionTypes.ADJUST_QTY:
      return {};

    default:
      return state;
  }
};

export default shopReducer