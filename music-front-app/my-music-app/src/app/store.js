import { configureStore } from '@reduxjs/toolkit'
import loggedInSlice from '../redux/loggedInSlice';


export const store = configureStore({
  reducer: 
  
  {
    
    loggedIn:loggedInSlice

},
})