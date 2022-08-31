import { productsList } from "../api/products";

const STOCK_DOWN = "STOCK_DOWN";
const PRODUCTS_TOTAL_SUM = "PRODUCTS_SUM";
const CHOOSE_ITEM_QTY = "CHOOSE_ITEM_QTY";

export const stockDown = (id) => ({ type: STOCK_DOWN, id });
export const productsTotalSum = (id) => ({ type: PRODUCTS_TOTAL_SUM, id });
export const chooseItemQty = (id) => ({
  type: CHOOSE_ITEM_QTY,
  id,
});

export const productsState = { productsList, productsSum: 0 };

export default function products(state = productsState, action) {
  switch (action.type) {
    case STOCK_DOWN:
      return {
        ...state,
        productsList: state.productsList.map((item) =>
          item.id === action.id
            ? { ...item, stock: item.stock > 0 ? item.stock - 1 : 0 }
            : item
        ),
      };
    case PRODUCTS_TOTAL_SUM:
      return {
        ...state,
        productsSum:
          state.productsSum +
          state.productsList
            .map((item) =>
              item.id === action.id ? item.stock > 0 && item.price : null
            )
            .reduce((acc, cur) => acc + cur, 0),
      };
    case CHOOSE_ITEM_QTY:
      return {
        ...state,
        productsList: state.productsList.map((item) =>
          item.id === action.id
            ? {
                ...item,
                qty: item.stock === 0 ? item.qty : item.qty + 1,
              }
            : item
        ),
        // .reduce((acc, cur) => acc + cur, 0),
      };
    default:
      return state;
  }
}
