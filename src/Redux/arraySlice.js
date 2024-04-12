import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
  max: Number.NEGATIVE_INFINITY,
  loading: false,
  sum: 0,
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
    },
    toogle: (state) => {
      state.loading += !state.loading;
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
    setFirst: (state, action) => {
      state.first = action.payload;
    },
    setLast: (state, action) => {
      state.last = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToArray, toogle, setMax, reset, setSum } =
  arraySlice.actions;

export default arraySlice.reducer;
