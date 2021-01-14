
import React from 'react'
import { Link } from 'react-router-dom'
import './css/imgbox.css'
import './css/Fontstyle.css'

import vegitables from './../img/vegitables.jpg'
import fruits from './../img/fruits.jpg'
import foodgrains from './../img/foodgrains.jpg'
import fruitvegitables from './../img/fruitvegitables.jpg'
import dairy from './../img/dairy.jpg'



const Home = () => {
  return (
    <div className="Container">
        <h4 className="title">HOME</h4>
    <div id="imagebox">
      
      {
      <div className="card">
      <img src={vegitables} alt="" />
      <div className="content">
      <span>Potatoes, Onions, Carrots etc</span>
      <Link to="./Vegetable">
     <button type="button">vegitables</button>
      </Link>
      </div>
      </div> 
      }
      {
      <div className="card">
      <img src={fruits} alt="" />
      <div className="content">
      <span>Banana, Lemons, Pineapple etc</span>
      <Link to="./Fruit">
     <button type="button">fruits</button>
      </Link>
      </div>
      </div> 
      }
      {
      <div className="card">
      <img src={fruitvegitables} alt="" />
      <div className="content">
      <span>Tomatoes, Pumpkins, Cucumbers etc.</span>
      <Link to="./About">
     <button type="button">fruitvegitables</button>
      </Link>
      </div>
      </div> 
      }
      {
      <div className="card">
      <img src={foodgrains} alt="" />
      <div className="content">
      <span>Rice, Dal, Corn etc</span>
      <Link to="./Grain">
     <button type="button">foodgrains</button>
      </Link>
      </div>
      </div> 
      }
      {
        <div className="card">
          <img src={dairy} alt="" />
          <div className="content">
            <span>Milk, Butter, Cheese etc</span>
            <Link to="./Dairy">
              <button type="button">Dairy Product</button>
            </Link>
          </div>
        </div>
      }
      
      </div>
      </div>
     
  )
  
}


export default Home

