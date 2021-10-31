import React from 'react'
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav id="navbar">
            <NavLink className="navlink" to="/">Home <span id="homeEmoji" role="img">🏠</span></NavLink>
            <NavLink className="navlink" to="/menu"> Menu <span id="menuEmoji" role="img">📖</span></NavLink>
            <NavLink className="navlink" to="/create"> Create Custom Sub <span id="sandwichEmoji" role="img">🥪</span></NavLink>
        </nav>
    )
}