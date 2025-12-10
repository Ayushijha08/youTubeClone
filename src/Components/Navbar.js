import React from 'react'
import './Navbar.css'
import { FaAlignJustify ,  FaYoutube } from "react-icons/fa";


function Navbar() {
  return (
    <div className="navbar">
        <FaAlignJustify  className="FaAlignJustify" size={20}/>
 <img className="logo" src='https://you-tube-pro.vercel.app/images/YouTube-White-Full-Color-Logo.wine.svg'></img>
 <div className="nav-search">
    
            <input type="text" id="search-input" className="nav-input" placeholder="Search"/>
            <button id="search-btn" className="nav_search_btn">
                <img src="https://you-tube-pro.vercel.app/images/searchlogo.svg" alt=""/></button>
            <img className="voice-search" src="	https://you-tube-pro.vercel.app/images/mic.svg" alt=""/>
       
 </div>
  <div className="end">
            <img src="https://you-tube-pro.vercel.app/images/addvideo.svg" className="displaynav" alt=""/>
            <img src="https://you-tube-pro.vercel.app/images/apps.svg" className="displaynav" alt=""/>
            <img src="https://you-tube-pro.vercel.app/images/notification.svg" className="displaynav" alt=""/>
            <img className="profile-img" src='./Images/ayushi.jpg' alt=""/>

        </div>
   
    </div>
  )
}

export default Navbar