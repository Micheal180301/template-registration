import { configureStore } from '@reduxjs/toolkit';

import api from './service/api';
import authSlice from './authSlice';

import type { Action } from 'redux';
import type { ThunkAction } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
