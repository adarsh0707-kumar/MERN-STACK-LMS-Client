'use client'

import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./featuures/api/apiSlice"
import authSlice from './featuures/auth/authSlice'


export const store = configureStore({
  reducer:{
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})