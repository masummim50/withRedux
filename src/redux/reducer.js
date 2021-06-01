import { Actiontypes } from "./action-types";
import { selectedProducts } from "./actions";

const inititalState = {
  products: []
};
const selectedProductInitialstate = {
  products: []
}

// each of our action contains a type and payload property, so destructure the action parameter down below: or i could use them as action.type and action.payload.
export const productReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state=selectedProductInitialstate, {type, payload})=> {
  switch(type){
    case "SELECTED_PRODUCTS":
      return {products: [...state.products,payload]};
    default:
      return state;
  }
}