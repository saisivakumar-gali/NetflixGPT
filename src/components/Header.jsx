import React, { useEffect } from 'react'
import logo from "../assets/netflixlogo.png" ;
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);

  const handleSignOut=()=>{
   
signOut(auth).then(() => {
 
}).catch((error) => {
  // An error happened.
});
  }

  useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
    navigate("/browse");
    
  } else {
    dispatch(removeUser());
    navigate("/");
    
  }
});
return ()=>unsubscribe();
},[]);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img className='w-44' src={logo} alt="" />
        {user && (<div className='flex items-center '> 
          <img className='w-10 h-10' src={USER_LOGO} alt="" />


          <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>)}
    </div>

  )
}

export default Header