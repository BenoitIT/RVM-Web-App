import { configureStore } from "@reduxjs/toolkit";
import PageHeaderReaducer from "./PageHeaderReducer";
import showNavReducer from "./NavBarDisplay";

export const store = configureStore({
  reducer: {
    header: PageHeaderReaducer,
    showNav: showNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
