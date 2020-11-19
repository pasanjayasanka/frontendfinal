import React from 'react'
import { Link } from 'react-router-dom'
import './css/imgbox.css'
import adminicon from './../img/admin-icon.jpg'
import customericon from './../img/customer-icon.jpg'
import farmericon from './../img/farmer-icon.JPG'




const Login = () => {
  return (
    <div className="Container">
        <h4 className="center">LOG IN</h4>
    <div id="imagebox">
      {
      <div className="card">
      <img src={farmericon} alt="" />
      <div className="content">
      <span>Log in as a farmer to add product</span>
      <Link to="./About">
     <button type="button">log in</button>
      </Link>
      </div>
      </div> 
      }
      {
      <div className="card">
      <img src={customericon} alt="" />
      <div className="content">
      <span>Log in as a customer to buy product</span>
      <Link to="./About">
     <button type="button">log in</button>
      </Link>
      </div>
      </div> 
      }
      {
      <div className="card">
      <img src={adminicon} alt="" />
      <div className="content">
      <span>Log in as a admin for checking </span>
      <Link to="./About">
     <button type="button">log in</button>
      </Link>
      </div>
      </div> 
      }
    </div>
    </div>
  )
  
}

export default Login