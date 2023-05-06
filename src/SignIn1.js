import React from 'react';
import { useState,useEffect } from 'react';
import { setToken, signin } from './api1';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

//import { Navigate } from "react-router-dom";
//import posts from '../post/post'

const SignIn1 = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
   // const  history = useHistory()
    const navigate = useNavigate();

    const setFormData = ( key, event ) =>{
        const value = event.target.value
        if(key === "email")
            setEmail(value)
         if(key === "password")
            setPassword(value)
             if(key === "fname")
            setFname(value)
             if(key === "lname")
            setLname(value)
             if(key === "age")
            setAge(value)
             if(key === "gender")
            setGender(value)
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
         await signin (email, password,fname,lname,age,gender)
        
        navigate("/posts")
      
        
    }
    
    return(
        <div className="container">
            <h5>SignIn1</h5>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Email :</label>
                    <input className="form-control" onChange={(e)=>setFormData("email", e)}></input>
                </div>

                <div>
                    <label>Password :</label>
                    <input type="password" className="form-control"  onChange={(e)=>setFormData("password", e)}></input>
                </div>
                <div>
                    <label>Fname :</label>
                    <input className="form-control"  onChange={(e)=>setFormData("fname", e)}></input>
                </div>
                <div>
                    <label>Lname :</label>
                    <input className="form-control"  onChange={(e)=>setFormData("lname", e)}></input>
                </div>
                <div>
                    <label>Age :</label>
                    <input className="form-control"  onChange={(e)=>setFormData("age", e)}></input>
                </div>                
                <div>
                    <label>Gender:</label>
                    <input className="form-control"  onChange={(e)=>setFormData("gender", e)}></input>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Sign in" />
                
            </form>
        </div>
    )
}

export default SignIn1