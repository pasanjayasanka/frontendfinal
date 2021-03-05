import React from 'react';


const Navbar = () => {
  return (
    <nav className="nav-wrapper green darken-3">
      <div className="container">
         {/* eslint-disable-next-line */}
        <a className="brand-logo">Govimithuro</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href='/Login'>Login</a></li>
          <li><a href='/Register'>Register</a></li>
          <li><a href='/Cart'>Cart</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Search'>Search</a></li>
          <li><a href='/MyProduct'>MyProduct</a></li>
          <li><a href='/Admin/AdminPanel'>AdminPanel</a></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
