import React from 'react'
import logo from "../assets/netflixlogo.png" ;
import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);

  const handleSignOut=()=>{
   
signOut(auth).then(() => {
 navigate("/");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img className='w-44' src={logo} alt="" />
        {user && (<div className='flex items-center '> 
          <img className='w-10 h-10' src="https://imgs.search.brave.com/_1YhWGfJE_pbpg5x-rNvmWKanuf0TuNM8vjby3XCJhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLXFv/OWg4MjEzNHQ5bnYw/ajAuanBn" alt="" />


          <button onClick={handleSignOut} className='font-bold text-white'>(SignOut)</button>
        </div>)}
    </div>

  )
}

export default Header