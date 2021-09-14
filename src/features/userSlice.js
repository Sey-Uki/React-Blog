import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("keepLoggedIn") === "true",
    userName: localStorage.getItem("userName") || "",
    keepLoggedIn: false,
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggedIn = true;
      state.keepLoggedIn = payload.keepLoggedIn;
      state.userName = payload.userName;
      localStorage.setItem("keepLoggedIn", state.keepLoggedIn);
      localStorage.setItem("userName", state.userName);
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.keepLoggedIn = false;
      localStorage.setItem("keepLoggedIn", state.keepLoggedIn);
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
