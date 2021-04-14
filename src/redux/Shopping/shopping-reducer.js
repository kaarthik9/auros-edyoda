import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  cart: [], // {name, price, path, quantity}
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      // Get the item
      const { item, quantity } = payload;
      // Check if the item is already in the cart
      const inCart = state.cart.find((product) => product.path === item.path);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
              product.path === item.path
                ? { ...product, quantity: product.quantity + quantity }
                : product
            )
          : [...state.cart, { ...item, quantity: quantity }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.path !== payload.path),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.path === payload.path
            ? { ...product, quantity: payload.value }
            : product
        ),
      };

    default:
      return state;
  }
};

export default shopReducer;
