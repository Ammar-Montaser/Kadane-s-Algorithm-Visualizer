import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./arraySlice";
export default configureStore({
  reducer: { arrayReducer },
});
