import React, { useEffect } from 'react'
import logo from "../assets/netflixlogo.png" ;
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, USER_LOGO } from '../utils/constants';
import { ToggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
const ShowGptSearch=useSelector(store=>store.gpt.ShowGptSearch);
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

const handleGptSearchClick=()=>{
  dispatch(ToggleGptSearchView());
}

const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value));

}
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img className='w-44' src={logo} alt="" />
        {user && (
          <div className='flex items-center '> 
          {ShowGptSearch &&<select className='text-white bg-gray-500 p-2 m-2 rounded-lg' onClick={handleLanguageChange} >
            {
              SUPPORTED_LANGUAGES.map((lang)=>(<option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
            }
          </select>}
          <button className='px-3 py-2 mx-4 my-2 bg-purple-800 rounded-lg text-white' onClick={handleGptSearchClick}>{ShowGptSearch?"Homepage":"Gpt Search"}</button>
          <img className='w-10 h-10' src={USER_LOGO} alt="" />


          <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>)}
    </div>

  )
}

export default Header