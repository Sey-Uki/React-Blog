import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalVisible: false,
  },
  reducers: {
    modalShow: (state) => {
      state.isModalVisible = true;
    },
    modalHide: (state) => {
      state.isModalVisible = false;
    },
  },
});

export const { modalShow, modalHide } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
