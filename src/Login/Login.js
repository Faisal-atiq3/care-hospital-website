import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';


import useAuth from '../hooks/useAuth';

const Login = () => {





  const {signInUsingGoogle,loginUser} =useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/';

    
  const [email,setEmail] = useState({});
  const [password, setPassword]=useState({});
  
  
  const forSubmit = e => {e.preventDefault();}
  
    const handleEmail = e=>{
      setEmail(e.target.value);
}


  const  handlePassword = e=>{
    setPassword(e.target.value);
  }


  const  handleSubmit = ()=>{
    loginUser(email,password)
    .then((userCredential) => {
      history.push(redirect_uri);
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  





  return (
    <div id="login mx-5">
    <h2>Please Login</h2>
    <div>
    <form onSubmit={forSubmit}>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" onBlur={handleEmail} class="form-control" id="exampleInputEmail1"/> 
<div id="emailHelp" class="form-text">.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" onBlur={handlePassword} class="form-control" id="exampleInputPassword1"/>
</div>

<button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
</div>

<p>Dont Have Any Account ? Please <Link to ="/register">Register</Link></p>
    <br /><br /><br />
    <div>-------------------------------------------------------</div>
    <button onClick={signInUsingGoogle} className="btn btn-warning"> Google SignIn</button>
</div>
);
};

    
    
  


export default Login;