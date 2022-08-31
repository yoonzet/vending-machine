import React from "react";
import Payment from "../components/Payment";
import { useDispatch, useSelector } from "react-redux";
import { putMoney } from "../modules/payment";

function PaymentContainer({ priceToString }) {
  const { money, productsSumInit } = useSelector((state) => ({
    money: state.payment.money,
    productsSumInit: state.products.productsSumInit,
  }));
  const dispatch = useDispatch();
  const charge = parseInt(money) - parseInt(productsSumInit);

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
        productsSumInit={productsSumInit}
        priceToString={priceToString}
      />
    </div>
  );
}

export default PaymentContainer;
