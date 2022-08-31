import React from "react";
import styled from "styled-components";
import PaymentContainer from "./PaymentContainer";
import ProductsContainer from "./ProductsContainer";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh 10%;
  min-width: 900px;
  padding: 5% 0;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 10px #eee;
  position: relative;
`;

function Home() {
  function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Div>
      <ProductsContainer priceToString={priceToString} />
      <PaymentContainer priceToString={priceToString} />
    </Div>
  );
}

export default Home;
