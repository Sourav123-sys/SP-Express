import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import  './NavBar.css'
const NavBar = () => {
    const [open,setOpen]= useState(false)
    
    return (
        <div className="sticky top-0 z-50" style={{backgroundColor:'green'}}>
        <div onClick={()=>setOpen(!open)}className='w-fit pt-3 z-50 md:hidden'>
        { open ? <XIcon className='w-6 h-6 text-black md:hidden'></XIcon>:<MenuIcon className='w-6 h-6 text-black md:hidden' ></MenuIcon>}
      </div>
        <div className='header  px-0 md:px-10 py-3 flex justify-between items-center'>
           <h1 className='hidden md:block' ><span className="text-6xl">SP</span><span className="text-2xl">Express</span></h1>
           <div className={`nav nav-item flex flex-col md:flex-row w-full md:w-auto text-center absolute md:static duration-500 ease-in-out pb-4 md:pb-0 ${open ? 'top-10' : 'top-[-200px]'}`}>  
              <Link to='/'>Home</Link>
               
              <Link to='/review'>Review</Link>
               <Link to='/dashboard'>Dashboard</Link>
              <Link to='/blog'>Blog</Link>
               <Link to='/about'>About</Link>
           </div>
        </div>
        </div>
    );
};

export default NavBar;