import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import { apiSlice } from "../slice/apiSlice";

export const toolkitStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export type RootState = ReturnType<typeof toolkitStore.getState>;
