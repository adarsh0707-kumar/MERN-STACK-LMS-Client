// redux/store.ts
'use client'

import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './featuures/api/apiSlice'
import authSlice from './featuures/auth/authSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

// Type declarations
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Initialize app function
export const initializeApp = async () => {
  try {
    await Promise.all([
      store.dispatch(
        apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true })
      ),
      store.dispatch(
        apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true })
      )
    ])
  } catch (error) {
    console.error('Initialization error:', error)
  }
}

// Call initialization on client side only
if (typeof window !== 'undefined') {
  initializeApp()
}
