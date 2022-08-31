import { productsState } from "./products";

const PUT_MONEY = "PUT_MONEY";
// const GET_CHARGE = "GET_CHARGE";

export const putMoney = (e) => ({ type: PUT_MONEY, e });
// export const getCharge = () => ({ type: GET_CHARGE });

const initialState = {
  money: 0,
  charge: 0,
  productsState,
};

export default function payment(state = initialState, action) {
  switch (action.type) {
    case PUT_MONEY:
      return {
        ...state,
        money: [parseInt(state.money) + parseInt(action.e.target.value)].reduce(
          (acc, cur) => acc + cur,
          0
        ),
      };
    // case GET_CHARGE:
    //   return {
    //     ...state,
    //     charge: state.productsState.productsSum,
    //   };
    default:
      return state;
  }
}
