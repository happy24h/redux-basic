import { combineReducers } from "redux";
// Thông thường, ứng dụng sẽ có nhiều reducer nên bạn phải gộp tất cả reducer lại để bỏ vào trong store.
// sử dụng hàm combineReducer của redux để hợp nhất tất cả reducer thành 1 reducer là allReducers.

import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  counterReducer,
  // add more reducers here
});

export default allReducers;
