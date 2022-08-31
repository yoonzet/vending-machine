import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  &::after {
    content: "";
    width: 90%;
    /* height: 1px; */
    border: 1px solid #f2d194;
    border-style: dashed;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const BtnWrap = styled.div`
  margin: 30px;
`;
const Button = styled.button`
  all: unset;
  width: 100px;
  height: 40px;
  background-color: #f2b705;
  /* box-shadow: 0px 0px 10px 2px #ddd; */
  border-radius: 30px;
  margin: 0 20px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
  &:hover {
    transform: scale(0.97);
  }
`;
const P_money = styled.p`
  margin: 30px;
  font-size: 20px;
  color: gray;
  text-align: center;
  font-weight: 500;
`;

const Btn_buy = styled.button`
  all: unset;
  margin: 0 20px;
  width: 300px;
  height: 60px;
  background-color: #f25430;
  /* box-shadow: 0px 4px 5px 1px #ddd; */
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(0.99);
    background-color: #f25430;
    box-shadow: 0px 4px 5px 1px #ddd;

    color: #fff;
  }
`;

const H2 = styled.h2`
  text-align: center;
  color: #f2b705;
  margin-bottom: 30px;
`;

const P_charge = styled.p`
  margin: 30px;
  font-size: 20px;
  color: gray;
  text-align: center;
  font-weight: 500;
`;

function Payment({
  commaMoney,
  productsSumInit,
  charge,
  commaCharge,
  onClick,
  priceToString,
}) {
  const [show, setShow] = useState(false);

  const onClickBuy = () => {
    setShow(!show);
  };

  return (
    <Div>
      <BtnWrap>
        <Button onClick={onClick} value={1000}>
          1,000원
        </Button>
        <Button onClick={onClick} value={5000}>
          5,000원
        </Button>

        <Button onClick={onClick} value={10000}>
          10,000원
        </Button>
        <P_money>투입금액:{commaMoney}원</P_money>
      </BtnWrap>
      <H2>상품 합계:{priceToString(productsSumInit)}원</H2>
      <Btn_buy onClick={onClickBuy}>구매하기</Btn_buy>
      <P_charge style={{ display: show ? "block" : "none" }}>
        {commaMoney === commaCharge
          ? "상품을 골라주세요"
          : charge === 0
          ? "감사합니다"
          : charge > 0
          ? `거스름돈: ${commaCharge}원`
          : ` 금액이 부족합니다.`}
      </P_charge>
    </Div>
  );
}

export default Payment;
