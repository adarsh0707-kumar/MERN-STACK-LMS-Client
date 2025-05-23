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


// call the refresh token function on every page loas 

const initializeApp = async () => {
  await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, {forceRefetch: true}))

}

initializeApp()