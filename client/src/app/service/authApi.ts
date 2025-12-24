import api from './api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: '/user/login',
        method: 'Post',
        body: userData,
      }),
    }),
    current: builder.query({
      query: () => ({
        url: '/user.current',
        method: 'GET',
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useCurrentQuery } =
  authApi;
