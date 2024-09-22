import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const getStyle = ({ isActive }) => {
        return {
            color: isActive ? 'red' : ''
        }


    }
    return (
        <nav>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                <li><NavLink to="/home" style={getStyle}>Home</NavLink></li>
                <li><NavLink to="/cart" style={getStyle}> Cart</NavLink></li>
                <li><NavLink to="/contact" style={getStyle}>Contact</NavLink></li>
                <li><NavLink to="/login" style={getStyle}>Login</NavLink></li>
            </ul>
        </nav>
    )
}
