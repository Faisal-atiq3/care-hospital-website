import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';




const Register = () => {
    const {signInEmail}=useAuth();
    const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/';



const [name, setName] = useState({});
const [email,setEmail] = useState({});
const [password, setPassword]=useState({});





    const forSubmit = e => {e.preventDefault();}

    const handleName = e =>{
        setName (e.target.value);
    }


    const handleEmail = e=>{
        setEmail(e.target.value);
    }

    const  handlePassword = e=>{
        setPassword(e.target.value);
    }

    const handleSubmit = ()=>{
        signInEmail(email, password)
        .then((userCredential) => {
            history.push(redirect_uri);
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        
        
    }



    return (
        <div>
             <form onSubmit={forSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="name" onBlur={handleName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text"></div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" onClick={handleSubmit} class="btn btn-primary">Register</button>
      </form>

      <div className="mb-3 form-check">
        <p>Already have an account? <Link to='/login'>Log In</Link></p>
      </div>

        </div>
       
    );
};

export default Register;