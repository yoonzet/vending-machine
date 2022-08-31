import React, { useState } from "react";
import Payment from "../components/Payment";
import { useDispatch, useSelector } from "react-redux";
import { putMoney } from "../modules/payment";

function PaymentContainer({ priceToString }) {
  const { money, productsSum } = useSelector((state) => ({
    money: state.payment.money,
    productsSum: state.products.productsSum,
  }));
  const dispatch = useDispatch();
  const charge = parseInt(money) - parseInt(productsSum);

  const commaCharge = priceToString(charge);
  const onClick = (e) => {
    dispatch(putMoney(e));
  };
  const commaMoney = priceToString(money);
  return (
    <div>
      <Payment
        commaMoney={commaMoney}
        onClick={onClick}
        charge={charge}
        commaCharge={commaCharge}
        productsSum={productsSum}
        priceToString={priceToString}
      />
    </div>
  );
}

export default PaymentContainer;
