import "../App.css";
import Item from "./Item";
import styled from "styled-components";

const Title = styled.h1`
  color: #f2b705;
  opacity: 0.4;
  text-align: center;
  font-size: 90px;
`;

function Products({ productsList, itemQty, onClick, priceToString }) {
  return (
    <>
      <Title>SNACKS</Title>
      <Item
        productsList={productsList}
        itemQty={itemQty}
        onClick={onClick}
        priceToString={priceToString}
      />
    </>
  );
}

export default Products;
