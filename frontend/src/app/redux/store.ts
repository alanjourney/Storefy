import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
