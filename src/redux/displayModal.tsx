import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface showModal {
  showModal: Boolean;
  showUpdateModal: Boolean
}

const initialState:showModal= {
    showModal: false,
    showUpdateModal:false
};

export const showModalSlice = createSlice({
  name: "showmodals",
  initialState,
  reducers: {
    modalPopUpDisplay: (state, action: PayloadAction<Boolean>) => {
      return {
        ...state,
        showModal: action.payload,
      };
    },
    showDataUpdateModal: (state, action: PayloadAction<Boolean>)=>{
      return {
        ...state,
        showUpdateModal: action.payload,
      };
    }
  },
});

export const { modalPopUpDisplay,showDataUpdateModal } = showModalSlice.actions;
export default showModalSlice.reducer;