import { useState } from "react";
import styled from "styled-components";
import { productsList } from "../api/products";
import Item from "./Item";
import Payment from "./Payment";

function Products() {
  const [items, setItems] = useState(productsList);
  const [productsSum, setProductsSum] = useState(0);

  const onClick = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, stock: item.stock > 0 ? item.stock - 1 : 0 }
          : item
      )
    );

    setProductsSum(
      productsSum +
        items
          .map((item) => (item.id === id ? item.stock > 0 && item.price : null))
          .reduce((acc, cur) => acc + cur, 0)
    );
  };
  return (
    <div>
      <h1>자판기</h1>

      <Item items={items} onClick={onClick} />
      <Payment items={items} productsSum={productsSum} />
    </div>
  );
}

export default Products;
