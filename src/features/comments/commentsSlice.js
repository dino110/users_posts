import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    allComments: [],
  },
  reducers: {
    updateComments: (state, action) => {
      state.allComments = action.payload;
    },
  },
});

export const { updateComments } = commentsSlice.actions;
export default commentsSlice.reducer;
