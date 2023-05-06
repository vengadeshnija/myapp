import React from 'react';
import { useState,useEffect } from 'react';
import { setToken, signin } from './api';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

//import { Navigate } from "react-router-dom";
//import posts from '../post/post'

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   // const  history = useHistory()
    const navigate = useNavigate();

    const setFormData = ( key, event ) =>{
        const value = event.target.value
        if(key === "email")
            setEmail(value)
        else if(key === "password")
            setPassword(value)
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
         await signin(email, password)
        
        navigate("/posts")
      
        
    }
    
    return(
        <div className="container">
            <h5>SignIn</h5>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Email :</label>
                    <input className="form-control" onChange={(e)=>setFormData("email", e)}></input>
                </div>

                <div>
                    <label>Password :</label>
                    <input type="password" className="form-control"  onChange={(e)=>setFormData("password", e)}></input>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Sign in" />
                
            </form>
        </div>
    )
}

export default SignIn