import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  posts: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
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
      state.posts.push(newPost);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const { id, newContent } = action.payload;
      const postToEdit = state.posts.find((post) => post.id === id);
      if (postToEdit) {
        postToEdit.content = newContent;
      }
    },
  },
});

export const { login, logout, addPost, deletePost, editPost } =
  userSlice.actions;

export default userSlice.reducer;
