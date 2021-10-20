import React from 'react';
import useAuth from '../hooks/useAuth';

const Profile = () => {

    const {user}=useAuth();
    return (
        <div class="card w-50 mx-auto">
        <h5 class="card-header"> Your Name: <h1> {user.displayName}</h1></h5>
        <div class="card-body">
          <h5 class="card-title"> Your Email: <h1>{user.email}</h1> </h5>
          <p class="card-text"></p>
          <br /> <br /> <br /> <br /> <br />
        </div>
      </div>
    );
};

export default Profile;