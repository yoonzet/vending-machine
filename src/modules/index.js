import { combineReducers } from "@reduxjs/toolkit";
import products from "./products";
import payment from "./payment";

const rootReducer = combineReducers({
  products,
  payment,
});

export default rootReducer;
