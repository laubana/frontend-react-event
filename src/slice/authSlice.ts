import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface StateProps {
  accessToken: string | undefined;
  id: string | undefined;
  email: string | undefined;
}

const initialState: StateProps = {
  accessToken: undefined,
  id: undefined,
  email: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { accessToken, email, id } = action.payload;

      state.accessToken = accessToken;
      state.id = id;
      state.email = email;
    },
    signOut: (state) => {
      state.accessToken = undefined;
      state.id = undefined;
      state.email = undefined;
      document.cookie = `refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    },
  },
});

export const { setAuth, signOut } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectId = (state: RootState) => state.auth.id;
export const selectEmail = (state: RootState) => state.auth.email;
