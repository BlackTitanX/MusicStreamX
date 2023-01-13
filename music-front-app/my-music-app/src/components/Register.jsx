import React from "react";
import { Link } from "react-router-dom";


const Register = ()=>{





    return(
        
     <div className="container mt-5">
        <h1 className="mb-3">Register Form</h1>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="name" placeholder="Your fullname" />
  </div>  
    <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text" className="form-control" id="username" placeholder="PeaceBringer etc..." />
  </div>     
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
  <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>

  </div>

  <div className="mb-3">
  <button class="btn btn-primary form-control" type="submit">Register</button>

  </div>

  <Link to="/login">Login</Link>
</div>


                        

    )
}

export default Register;