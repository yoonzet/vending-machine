import styled from "styled-components";
import Home from "./container/Home";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

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
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <Footer>
        &copy;{new Date().getFullYear()}Portfolio <br />
        yoonzet703@gmail.com / Lee yoonji
      </Footer>
    </HashRouter>
  );
}

export default App;
