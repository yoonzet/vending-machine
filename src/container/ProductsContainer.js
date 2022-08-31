import React from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { productsSum, stockDown } from "../modules/products";

function ProductsContainer({ priceToString }) {
  const { productsList, productsSumInit } = useSelector((state) => ({
    productsList: state.products.productsList,
    productsSumInit: state.products.productsSumInit,
  }));
  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(stockDown(id));
    dispatch(productsSum(id));
  };
  return (
    <div>
      <Products
        productsList={productsList}
        productsSumInit={productsSumInit}
        onClick={onClick}
        priceToString={priceToString}
      />
    </div>
  );
}

export default ProductsContainer;
