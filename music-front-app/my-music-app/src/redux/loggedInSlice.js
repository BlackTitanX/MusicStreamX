import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: false,
}

export const loggedInSlice = createSlice({

   name:'logged',
   initialState,

   reducers: {

      setLoggedIn:(state,action)=>{

        state.value = action.payload;
      },

      setLoggedOut:(state, action)=>{

        state.value = action.payload;
      }
     

   }


})


export const {setLoggedIn, setLoggedOut} = loggedInSlice.actions;
export default loggedInSlice.reducer;