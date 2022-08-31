import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharge, putMoney } from "../modules/payment";

function Payment({ productsSumInit }) {
  const { money } = useSelector((state) => ({
    money: state.payment.money,
    // charge: state.payment.charge,
  }));
  const dispatch = useDispatch();
  const charge = money - productsSumInit;

  const onClick = (e) => {
    dispatch(putMoney(e));
  };

  // useEffect(() => {
  //   dispatch(getCharge());
  // }, [money, productsSumInit]);

  return (
    <div>
      <h2>상품 합계:{productsSumInit}</h2>

      <div>
        <button onClick={onClick} value={10000}>
          10,000원
        </button>
        <button onClick={onClick} value={5000}>
          5,000원
        </button>
        <button onClick={onClick} value={1000}>
          1,000원
        </button>
        <p>투입금액:{money}</p>
      </div>
      <p>
        {charge !== 0
          ? charge > 0
            ? `거스름돈: ${charge}원`
            : "금액이 부족합니다."
          : null}
      </p>
    </div>
  );
}

export default Payment;
