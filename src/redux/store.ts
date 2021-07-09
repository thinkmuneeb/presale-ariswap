import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from './reducer/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV === "development",
});

export default store;