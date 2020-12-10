import { createStore, applyMiddleware } from "redux";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {reduxBatch} from "@manaflair/redux-batch";
import {persistStore} from "redux-persist";
import {rootReducer, rootSaga} from "./rootReducer";


export default reduxStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true
    }),
    sagaMiddleware
  ];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  /**
   * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
   * @see https://github.com/rt2zz/redux-persist#persistor-object
   */
  // export const persistor = persistStore(store);

  // sagaMiddleware.run(rootSaga);
}

// import {createStore} from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer);

// export default store;