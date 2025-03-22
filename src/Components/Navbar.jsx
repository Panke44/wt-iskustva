import React from 'react'
import Logo from '../Images/wat-logo.png'

export const Navbar = () => {
  return (
    <nav class="navbar-desktop">
    <a href="/"> <img src={Logo} alt="WAT Iskustva Logo"/> </a>
    <ul>
        <li> <a href="/"> Početna </a> </li>
        <li> <a href="/iskustva"> Iskustva </a> </li>
        <li> <a href="/blog"> Blog </a> </li>
    </ul>

    <ul>

    <a href="/aaa" class="button-exp"> Pošalji iskustvo </a>
    </ul>
</nav>

  )
}

export default Navbar
