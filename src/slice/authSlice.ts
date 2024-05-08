import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface StateProps {
  accessToken: string | undefined;
  email: string | undefined;
}

const initialState: StateProps = {
  accessToken: undefined,
  email: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { accessToken, email } = action.payload;

      state.accessToken = accessToken;
      state.email = email;
    },
    signOut: (state) => {
      state.accessToken = undefined;
      state.email = undefined;
    },
  },
});

export const { setAuth, signOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectEmail = (state: RootState) => state.auth.email;
