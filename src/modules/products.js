const STOCK_DOWN = "STOCK_DOWN";

export const stock_down = () => ({ type: STOCK_DOWN });

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STOCK_DOWN:
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              stock: action.stock + 1,
            }
          : item
      );
    default:
      return state;
  }
}
