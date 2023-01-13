import React from "react";
import { Link } from "react-router-dom";
function Navbar() {


    return (
        <div>



            <nav className ="navbar navbar-expand-lg bg-light">
                <div className="container-fluid bg-light">
                    <Link className="navbar-brand" to="/">Music App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            
                        </ul>
                        <div className="d-flex mx-2">
                            
                            <Link className="btn btn-outline-success col-sm-6 me-2 signUp" to='/login'>Sign Up</Link>
                            <Link className="btn btn-primary col-sm-6 register" to='/register'>Register</Link>
                        </div>
                    </div>
                </div>
            </nav>




        </div>
    )
}

export default Navbar;