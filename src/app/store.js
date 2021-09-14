import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "../features/modalSlice";
import { userReducer } from "../features/userSlice";

const reducer = combineReducers({
  modalReducer,
  userReducer,
});

export const store = configureStore({
  reducer,
});
