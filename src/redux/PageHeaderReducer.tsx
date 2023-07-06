import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HeaderState {
  header:string
}

const initialState: HeaderState = {
  header: 'Dashboard Overview',
}

export const counterSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    SwitchHeaderByPage: (state, action: PayloadAction<string>) => {
      return {
        ...state,header: action.payload,
      }
    },
  },
})

export const { SwitchHeaderByPage } = counterSlice.actions;
export default counterSlice.reducer