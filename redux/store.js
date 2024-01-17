import userReducer from "./userSlice";
import postReducer from "./postSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});

export default store;
