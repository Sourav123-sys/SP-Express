import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import  './NavBar.css'
const NavBar = () => {
    const [open,setOpen]= useState(false)
    
    return (
        <div className='header '>
              <div onClick={()=>setOpen(!open)}className='w-6  h-6  md:hidden'>
              { open ? <XIcon></XIcon>:<MenuIcon ></MenuIcon>}
            </div>
           <h1 ><span Style={{fontSize: '50px'}}>SP</span><span>express</span></h1>

           <ul className={`md:flex    absolute md:static duration-500  ease-in w-full ${open ? 'top-6' : 'top-[-120px]'}`}>  
               <li><Link to='/'>Home</Link></li>
               
               <li><Link to='/review'>Review</Link></li>
               <li><Link to='/dashboard'>Dashboard</Link></li>
               <li><Link to='/blog'>Blog</Link></li>
               <li><Link to='/about'>About</Link></li>
           </ul>
        </div>
    );
};

export default NavBar;