import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute' >
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/024bfb98-9e9d-441d-9c5f-d2c798d8e42f/web/IN-en-20251013-TRIFECTA-perspective_b6324826-0535-47c5-be5f-4f50e9663eaf_large.jpg" alt="" className='w-screen h-screen' />
        </div>
        <form className='absolute w-3/12 my-40 mx-auto left-0 right-0 p-12 bg-black/80 text-white rounded-lg ' >

        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>

          <input type="text" placeholder='Email Address' className='p-3 my-2 w-full bg-gray-700 rounded-md ' />

          
          {!isSignInForm && (
            <input type="text" placeholder='Full Name' className='p-3 my-2 w-full bg-gray-700 rounded-md' />
          )
          }

          <input type="password" placeholder='password' className='p-3 my-2 w-full bg-gray-700 rounded-md' />


          <button className='p-3 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"Don't have account? Sign up now":"Already have Account? Sign In"}</p>
        </form>
    </div>
  ) 
}

export default Login