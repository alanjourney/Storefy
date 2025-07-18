import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { view: "greetings" },
  reducers: {
    setAuthView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setAuthView } = authSlice.actions;

export default authSlice.reducer;
