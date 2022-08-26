import React from 'react'
import lilly from './Assets/lilly.svg'
import {Link} from 'react-router-dom'
import Headerstyle from '../Styles/Headerstyle.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-logo-and-text'>
            <img src={lilly} alt='logo' />
            <h1>Lillies</h1>
        </div>
        <div className='navbar'>
            <ul>
            <li><Link to ='/LandingPage'>Home</Link></li>
                <li><Link to ='/Login'>Login</Link></li>
                <li className='signUp'><Link to ='/Register'>Sign Up</Link></li> 
            </ul>
        </div>
    </div>
  )
}

export default Header