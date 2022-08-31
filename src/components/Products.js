import { useDispatch, useSelector } from "react-redux";
import { productsSum, stockDown } from "../modules/products";
import Item from "./Item";
import Payment from "./Payment";

function Products() {
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
      <h1>자판기</h1>

      <Item productsList={productsList} onClick={onClick} />
      <Payment productsSumInit={productsSumInit} />
    </div>
  );
}

export default Products;
