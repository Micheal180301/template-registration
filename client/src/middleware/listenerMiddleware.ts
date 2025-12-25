import { createListenerMiddleware } from '@reduxjs/toolkit';

import { authApi } from '../app/service/authApi';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token);
    }
  },
}); // записваем в сторедж при логине

listenerMiddleware.startListening({
  matcher: authApi.endpoints.register.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token);
    }
  },
}); // записваем в сторедж при реге
