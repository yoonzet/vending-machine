import { createPromiseThunk, handleAsyncActions } from "../ lib/asyncUtils";
import * as productsAPI from "../api/products";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

export const getProducts = createPromiseThunk(
  GET_PRODUCTS,
  productsAPI.getProducts
);
export const getProduct = createPromiseThunk(
  GET_PRODUCT,
  productsAPI.getProductById
);

const initialState = {
  products: {
    loading: false,
    data: null,
    error: null,
  },
  product: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_ERROR:
      return handleAsyncActions(GET_PRODUCTS, "products", true)(state, action);
    case GET_PRODUCT:
    case GET_PRODUCT_SUCCESS:
    case GET_PRODUCT_ERROR:
      return handleAsyncActions(GET_PRODUCT, "product")(state, action);
    default:
      return state;
  }
}
