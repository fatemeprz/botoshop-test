import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helper";

const initialState = {
  data: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.data.find((item) => item.id === action.payload.id)) {
        state.data.push(action.payload);
        state.itemsCounter = sumQuantity(state.data);
        state.total = sumPrice(state.data);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = newData;
      state.itemsCounter = sumQuantity(state.data);
      state.total = sumPrice(state.data);
    },
    increase: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index].count++;
      state.itemsCounter = sumQuantity(state.data);
      state.total = sumPrice(state.data);
    },
    decrease: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index].count--;
      state.itemsCounter = sumQuantity(state.data);
      state.total = sumPrice(state.data);
    },
    checkingout: (state) => {
      state.data = [];
      state.checkout = true;
      state.itemsCounter = 0;
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkingout } =
  cartSlice.actions;
