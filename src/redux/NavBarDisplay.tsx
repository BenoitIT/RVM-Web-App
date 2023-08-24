import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavState {
  showNav: Boolean;
}

const initialState: NavState = {
  showNav: false,
};

export const showNavSlice = createSlice({
  name: "showNav",
  initialState,
  reducers: {
    SwitchSideBarDisplay: (state, action: PayloadAction<Boolean>) => {
      return {
        ...state,
        showNav: action.payload,
      };
    },
  },
});

export const { SwitchSideBarDisplay } = showNavSlice.actions;
export default showNavSlice.reducer;
