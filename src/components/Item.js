import { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  margin-top: 5%;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 200px;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`;
const Div_Qty = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 30px;
  background-color: #f25430;
  text-align: center;
  color: #fff;
  line-height: 25px;
  position: absolute;
  transform: translate(50px, 20px);
`;

function Item({ productsList, onClick, priceToString }) {
  return (
    <div>
      <Ul>
        {productsList.map((item) => (
          <Li key={item.id}>
            <Img onClick={() => onClick(item.id)} src={item.img} />

            <Div_Qty
              style={{
                display: item.qty > 0 ? "block" : "none",
              }}
            >
              {item.stock === 0 ? item.qty + 1 : item.qty}
            </Div_Qty>

            <b>{priceToString(item.price)}원</b>
            <p style={{ color: "gray" }}>재고: {item.stock}개</p>
            <p style={{ color: "red" }}>{item.stock > 0 ? "" : "품절"}</p>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default Item;
