import React, { useEffect, useState } from "react";

function Payment({ productsSum }) {
  const [money, setMoney] = useState([0]);
  const [charge, setCharge] = useState(0);

  const onClick = (e) => {
    setMoney(
      [parseInt(money) + parseInt(e.target.value)].reduce(
        (acc, cur) => acc + cur,
        0
      )
    );
  };

  useEffect(() => {
    setCharge(money - productsSum);
  }, [money, productsSum]);

  return (
    <div>
      <h2>상품 합계:{productsSum}</h2>

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
