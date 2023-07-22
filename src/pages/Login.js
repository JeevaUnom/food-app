
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight, faEnvelope,  faKey } from "@fortawesome/free-solid-svg-icons"

import { Navigate } from "react-router-dom"
import { useState } from "react"
import validation from "./Loginvalidation"
import axios from "axios"



export default function Login(){

     const [values, setValues] = useState({
          email : '',
          password : ''
        })
       
        const [errors, setErrors] = useState({})

       const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
       }

       const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email ==="" && errors.password ===""){
          axios.post('http://localhost:8081/signup',values)
          .then(res => {
            Navigate('/');
          })
          .catch(err => console.log(err));
        }
       }
  
      const NavigateSigin = () =>
       {
        
        window.location.href = "/signin"; 

       }
  
    return (
        <div>
         
            <div className="log-container">
            <center>
            <h2> <u>Login Page</u></h2><br></br>
            <hr></hr>
            <br></br>
            
            <form className="login-form" onSubmit={handleSubmit}>
               
            <FontAwesomeIcon className="icon" icon={faEnvelope} />  
            <label></label>
            <input type="email" onChange={handleInput} value={values.email} name="email" placeholder="Enter your mail.." /><br></br>
            {errors.email && <span className="text-danger">{errors.email}</span>}<br></br>

            <FontAwesomeIcon className="icon" icon={faKey} />
            <input type="password" onChange={handleInput} value={values.password} name="password" placeholder="Enter your password.."  /><br></br>
            {errors.password && <span className="text-danger">{errors.password}</span>}<br></br>

            <button className="btn" type="submit">Login  <FontAwesomeIcon icon={faArrowCircleRight} /></button><br></br>
            </form>
            
            <h4> Forgot password?<a href="#"> Click Here</a></h4><br></br>
            <h4>Or</h4><br></br>
            <button className="btn" onClick={NavigateSigin}>Sign Up  <FontAwesomeIcon icon={faArrowCircleRight} /></button><br></br>
            <br></br><hr></hr>
            </center>
            </div>
           
        </div>
    )
}