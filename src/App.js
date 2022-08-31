import styled from "styled-components";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = styled.div`
  /* height: 100vh; */
  position: relative;
  bottom: 0;
  margin-bottom: 3%;
  text-align: center;
  font-size: 12px;
`;

function App() {
  return (
    <>
      <Home />
      <Footer>
        &copy;{new Date().getFullYear()}Portfolio <br />
        yoonzet703@gmail.com / Lee yoonji
      </Footer>
    </>
  );
}

export default App;
