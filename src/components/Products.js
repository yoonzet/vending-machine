import "../App.css";
import Item from "./Item";
import styled from "styled-components";

const Title = styled.h1`
  color: #f2d194;
  text-align: center;
  font-size: 90px;
`;

const H2 = styled.h2`
  margin: 30px;
  text-align: center;
  color: #f25430;
  &::after {
    content: "";
    width: 100%;
    /* height: 1px; */
    border: 1px solid #f2d194;
    border-style: dashed;
    position: absolute;
    left: 0;
    transform: translateY(50px);
  }
`;

function Products({ productsList, productsSumInit, onClick, priceToString }) {
  return (
    <>
      <Title>SNACKS</Title>
      <Item
        productsList={productsList}
        onClick={onClick}
        priceToString={priceToString}
      />
      <H2>상품 합계:{priceToString(productsSumInit)}원</H2>
    </>
  );
}

export default Products;
