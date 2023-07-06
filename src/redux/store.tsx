import { configureStore } from '@reduxjs/toolkit'
import PageHeaderReaducer from './PageHeaderReducer'

export const store = configureStore({
  reducer: {
    header:PageHeaderReaducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch