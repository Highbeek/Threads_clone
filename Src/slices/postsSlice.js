import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        id: nanoid(),
        createdAt: action.payload.createdAt,
        user: {
          id: action.payload.user.id,
          image: action.payload.user.image,
          name: action.payload.user.name,
        },
      };
      state.push(newPost);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const { id, newContent } = action.payload;
      const postToEdit = state.find((post) => post.id === id);
      if (postToEdit) {
        postToEdit.content = newContent;
      }
    },
  },
});

export const { addPost, deletePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
