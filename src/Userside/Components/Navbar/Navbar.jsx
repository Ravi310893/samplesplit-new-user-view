import React from "react";
import "./Navbar.css";
import logo from "../../../Assets/logoc.png";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  

  return (
    <>
      <header className="header-section clearfix">
        <a href="#" className="site-logo">
          <img style={{borderRadius:'45px' ,height:'40px'}} src={logo} alt="" />
          <div style={{position:'absolute',left:'70px', top:'12px',fontSize:'40px' ,fontFamily:'proxima nova'}}>
           <label style={{color:'white'}}>SAMPLE</label><label style={{color:'#2F76DB'}}>SPLIT</label>
        </div>
        </a>
        
        
        
        <div className="header-right">
          {/* <a href="#" className="hr-btn">Help</a> */}
          <span>|</span>
          <div className="user-panel">
            <NavLink to='/login'>Login</NavLink>
            <a href="" className="register">
              Create an account
            </a>
          </div>
        </div>
        <ul className="main-menu">
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/splitsongs'>Split Songs</NavLink>
          </li>
          <li>
           <NavLink to='/freestem'>Free Stems</NavLink>
          </li>
          <li>
           <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li>
          <NavLink to='/contactus'>Contact us</NavLink>
          </li>
          <li>
          <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
