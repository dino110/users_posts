import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
  },
  reducers: {
    updateUsers: (state, action) => {
      state.allUsers = [...action.payload];
    },
  },
});

export const { updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
