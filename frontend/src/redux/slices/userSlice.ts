import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: any;
  isAuth: boolean;
}

const initialState: UserState = {
  currentUser: [],
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
