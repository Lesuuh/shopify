import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

const bazaarSlice = createSlice({
  name: "bazaar",
  initialState,
  reducers: {
    addToCart(state, action) {
      const items = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (items) {
        items.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
  },
});

export const { addToCart } = bazaarSlice.actions;
export default bazaarSlice.reducer;
