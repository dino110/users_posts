import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    allPostsDetails: [],
  },
  reducers: {
    updatePosts: (state, action) => {
      state.allPosts = action.payload;
    },
    updatePostsDetails: (state, action) => {
      state.allPostsDetails = action.payload;
    },
  },
});

export const { updatePosts, updatePostsDetails } = postsSlice.actions;
export default postsSlice.reducer;
