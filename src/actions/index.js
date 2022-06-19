import { INCREMENT, DECREMENT } from "../const/index";
export const actionIncrement = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const actionDecrement = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  }
}