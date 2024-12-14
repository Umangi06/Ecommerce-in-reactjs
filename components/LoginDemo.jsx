import React from 'react';
import { GoogleAuthProvider, signInWithPopup, auth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

const LoginDemo = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`Login Successfully Done! Welcome ${user.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(`Login failed: ${errorMessage} (Error code: ${errorCode})`);
      });
  };

  return (
    <div className='m-5 p-5'>
      <button className='bg-primary px-4 text-white' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginDemo;
