import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../components/auth/redux/authRedux";
// import { studentSlice } from "../app/modules/Student/_redux/studentSlice";
// import {customersSlice} from "../app/modules/ECommerce/_redux/customers/customersSlice";
// import {productsSlice} from "../app/modules/ECommerce/_redux/products/productsSlice";
// import {remarksSlice} from "../app/modules/ECommerce/_redux/remarks/remarksSlice";
// import {specificationsSlice} from "../app/modules/ECommerce/_redux/specifications/specificationsSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  // students: studentSlice.reducer,
  // customers: customersSlice.reducer,
  // products: productsSlice.reducer,
  // remarks: remarksSlice.reducer,
  // specifications: specificationsSlice.reducer
});

export function* rootSaga() {
  yield all([]);
}
// import counterReducer from './counterReducer';
// import {combineReducers} from 'redux';

// const rootReducer = combineReducers({
//     auth: auth.reducer
// });

// export default rootReducer;