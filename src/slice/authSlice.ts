import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/toolkitStore";

export const authSlice = createSlice({
  name: "auth",
  initialState: { accessToken: undefined },
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;

      state.accessToken = accessToken;
    },
    signout: (state) => {
      state.accessToken = undefined;
    },
  },
});

export const { setAccessToken, signout } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
