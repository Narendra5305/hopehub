import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: '/users/register',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUpdates: builder.query({
      query: () => '/update',
    }),
    addUpdate: builder.mutation({
      query: (data) => ({
        url: '/update',
        method: 'POST',
        body: data,
      }),
    }),
    
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUpdatesQuery,
  useAddUpdateMutation,
} = apiSlice;