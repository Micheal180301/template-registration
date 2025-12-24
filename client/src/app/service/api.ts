import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8000/api',
  prepareHeaders(header, api) {
    const { getState } = api;

    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem('token');

    if (token && token !== null) {
      header.set('authorization', `Bearer ${token}`);
    }
  },
});

const baseQueryWhithRetry = retry(baseQuery, { maxRetries: 1 });

const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWhithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});

export default api;
