import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='Container'>
      <ul>
  <li><a href="#home">Logo</a></li>
  <ul className='Nav'>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#contact">Contact</a></li>
    <ul className='Login'>
  <li><a href="#home">Signup</a></li>
  <li><a href="#about">Login</a></li>
</ul>
</ul>
</ul>

    </div>
  
)
}
