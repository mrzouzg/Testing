import { createSlice } from "@reduxjs/toolkit";

const initialState = [

    {
        productName:'',
        category:'',
        imageUrl:'',
        price:1,
        quantity:1

    },

]
// initialState is array of users    create slice m2assas el feri3 branch manager
const userSlice = createSlice({

    name:'users',
    initialState,
    reducers:{
        //functions add user for array del user
    }  
})

//array of users 
export const selectAllUsers = (state)=>state.users

export default userSlice.reducer