'use client'

import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./featuures/api/apiSlice"


export const store = configureStore({
  reducer:{
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})