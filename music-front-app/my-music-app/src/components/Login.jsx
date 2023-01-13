import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/app.css';
import {useSelector, useDispatch} from 'react-redux';
import { setLoggedIn } from "../redux/loggedInSlice";
axios.defaults.withCredentials =true;

const Login = ()=>{
        let [CurrentUsername, setCurrentUsername] = useState("")
        let [CurrentPassword, setCurrentPassword ] = useState("")
        const LoggedStatus = useSelector((state)=> state.loggedIn.value);
        const dispatch = useDispatch();
         let redirect = useNavigate();
           console.log(LoggedStatus)
           if(LoggedStatus === true){
            redirect('/')

           }



     const handleSubmit = async (e)=>{
        e.preventDefault();
         
         await  axios.post('http://localhost:4000/login',
          {username:CurrentUsername, password:CurrentPassword},{
            withCredentials:true

            
          }).then(res=>{
            dispatch(setLoggedIn(true));
          }).then(()=>{
            redirect('/')
          })
          .catch(e=>{
            console.log(e)
          })
    

     }
        
    return(
            <>
  <form className="container loginForm" onSubmit={handleSubmit}>
  <div class="row mb-3">
    <label HTMLfor="inputEmail3" class="col-sm-0 col-form-label">Username </label>
    <div class="col-sm-10">
      <input onChange={e=>{setCurrentUsername(e.target.value)}} value={CurrentUsername} type="text" class="form-control inputFields" id="username"/>
    </div>
    
  </div>
  <div class="row mb-3">
    <label HTMLfor="inputPassword3 " class="col-sm-0 col-form-label ">Password</label>
    <div class="col-sm-10">
      <input onChange={e=>{setCurrentPassword(e.target.value)}} value={CurrentPassword} type="password" class="form-control inputFields " id="inputPassword3"/>
    </div>
  </div>

  
  <div className="d-flex flex-column">
  <button type="submit" class="btn btn-primary col-sm-4">Sign in</button>
  <Link to='/Register' className="linkElement">Register</Link>
  </div>
</form>  


     
      </>
    )
}


export default Login;