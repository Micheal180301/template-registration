import { createSlice } from '@reduxjs/toolkit';

import { authApi } from './service/authApi';

import type { User } from './types';
import type { RootState } from './store';

type InitialState = {
  user: User | null;
  isAuthorization: boolean;
};

const initialState: InitialState = {
  user: null,
  isAuthorization: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isAuthorization = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isAuthorization = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.current.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isAuthorization = true;
      }
    );
  },
});

export const { logOut } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsAuthorization = (state: RootState) =>
  state.auth.isAuthorization;

export default authSlice.reducer;
