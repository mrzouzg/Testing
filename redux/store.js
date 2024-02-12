//import userReducer from "./userSlice";
import postReducer from "./postSlice";
import testReducer from "./testSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    //users: userReducer,
    posts: postReducer,
    test: testReducer,
  },
});

export default store;
