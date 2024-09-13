import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../slice/slice";

const store = configureStore({
  reducer: {
    data: sliceReducer,
  },
});

export default store;
