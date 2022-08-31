import styled from "styled-components";
import PaymentContainer from "./container/PaymentContainer";
import ProductsContainer from "./container/ProductsContainer";

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
const Footer = styled.div`
  /* height: 100vh; */
  position: relative;
  bottom: 0;
  margin-bottom: 3%;
  text-align: center;
  font-size: 12px;
`;

function App() {
  function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Div>
        <ProductsContainer priceToString={priceToString} />
        <PaymentContainer priceToString={priceToString} />
      </Div>
      <Footer>
        &copy;{new Date().getFullYear()}Portfolio <br /> yoonzet703@gmail.com /
        Lee yoonji
      </Footer>
    </>
  );
}

export default App;
