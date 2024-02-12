import { createSlice } from "@reduxjs/toolkit";



const initialState = [
  

];

// posts Management
const postSlice = createSlice({
  name: "posts",
  initialState, // []    state.posts    hayye wasaltne la hon array mobashara dakhila kil data fo2 line 5
  reducers: {
    // All functions here
    // state to access data of slices of branch manager
    PostAdd: (state, action) => {
      // data post object data sent from postForm  //dispatch(postAdd(data))

      console.log("action payload", action.payload);
        // push it in the array
      state.push(action.payload);
    },
  },
});

// array of users   state.posts testad3e data from index.js --- state.posts wasaltne la data awlayeh initialState, // []
export const selectAllPosts = (state) => state.posts;

export const { PostAdd } = postSlice.actions; // functions

export default postSlice.reducer;
