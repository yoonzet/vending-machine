import React from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseItemQty,
  productsTotalSum,
  stockDown,
} from "../modules/products";

function ProductsContainer({ priceToString }) {
  const { productsList, productsSum, itemQty } = useSelector((state) => ({
    productsList: state.products.productsList,
    productsSum: state.products.productsSum,
    itemQty: state.products.itemQty,
  }));

  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(stockDown(id));
    dispatch(productsTotalSum(id));
    dispatch(chooseItemQty(id));
  };
  return (
    <div>
      <Products
        productsList={productsList}
        productsSum={productsSum}
        itemQty={itemQty}
        onClick={onClick}
        priceToString={priceToString}
      />
    </div>
  );
}

export default ProductsContainer;
