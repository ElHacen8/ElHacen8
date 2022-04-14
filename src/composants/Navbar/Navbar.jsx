import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">

        <ul className="liste">

            <li className="items"><NavLink exact to="/home">Home</NavLink></li>
            <li className="items"><NavLink to="/posts">Posts</NavLink></li>
            <li className="items"><NavLink to="/like">Like</NavLink></li>
            
        </ul>
            
                
            
    </div>
  )
}

export default Navbar;