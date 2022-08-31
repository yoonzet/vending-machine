import { productsList } from "../api/products";

const STOCK_DOWN = "STOCK_DOWN";
const PRODUCTS_SUM = "PRODUCTS_SUM";

export const stockDown = (id) => ({ type: STOCK_DOWN, id });
export const productsSum = (id) => ({ type: PRODUCTS_SUM, id });

export const productsState = { productsList, productsSumInit: 0 };

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
    case PRODUCTS_SUM:
      return {
        ...state,
        productsSumInit:
          state.productsSumInit +
          state.productsList
            .map((item) =>
              item.id === action.id ? item.stock > 0 && item.price : null
            )
            .reduce((acc, cur) => acc + cur, 0),
      };
    default:
      return state;
  }
}
