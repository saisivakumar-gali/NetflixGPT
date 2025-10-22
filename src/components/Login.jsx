import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile   } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage,seterrorMessage]=useState(null);
   const navigate=useNavigate();
   const dispatch=useDispatch();
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }

  const email=useRef(null);
  const password=useRef(null);
const name=useRef(null);

  const handleButtonClick=()=>{
    const message=checkValidData(email.current.value,password.current.value);
    seterrorMessage(message);
    if(message)return;

    if(!isSignInForm){
createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value
}).then(() => {
  // Profile updated!
  const {uid,email,displayName} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      
  navigate("/browse");
  // ...
}).catch((error) => {
  // An error occurred
  seterrorMessage(errorMessage);
  // ...
});
    console.log(user); 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterrorMessage(errorCode+" - "+errorMessage);
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      
   seterrorMessage(errorCode+" - "+errorMessage);
  });

    }

    

  }
  return (
    <div>
        <Header/>
        <div className='absolute' >
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg" alt="" className='w-screen h-screen' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 my-40 mx-auto left-0 right-0 p-12 bg-black/80 text-white rounded-lg ' >

        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>

          {!isSignInForm && (
            <input ref={name} type="text" placeholder='Full Name' className='p-3 my-2 w-full bg-gray-700 rounded-md' />
          )
          }

          <input ref={email} type="text" placeholder='Email Address' className='p-3 my-2 w-full bg-gray-700 rounded-md ' />

          <input ref={password} type="password" placeholder='password' className='p-3 my-2 w-full bg-gray-700 rounded-md' />
          
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

          <button className='p-3 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>

          

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Don't have account? Sign up now":"Already have Account? Sign In"}</p>
        </form>
    </div>
  ) 
}

export default Login