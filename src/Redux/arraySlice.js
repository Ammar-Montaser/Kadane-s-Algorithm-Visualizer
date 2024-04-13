import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  max: Number.NEGATIVE_INFINITY,
  loading: false,
  sum: 0,
  start: 0,
  end: 0,
};

export const arraySlice = createSlice({
  name: "arraySlice",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.max = Number.NEGATIVE_INFINITY;
      state.array = [];
      state.loading = false;
      state.sum = 0;
      state.start = 0;
      state.end = 0;
    },
    toogle: (state, action) => {
      state.loading = action.payload;
    },

    addItemToArray: (state, action) => {
      state.array = [...state.array, action.payload];
      // console.log(state.array);
    },
    setMax: (state, action) => {
      state.max = action.payload;
    },
    setSum: (state, action) => {
      state.sum = action.payload;
    },
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToArray,
  toogle,
  setMax,
  reset,
  setSum,
  setEnd,
  setStart,
} = arraySlice.actions;

export default arraySlice.reducer;
