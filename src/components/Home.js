
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './css/imgbox.css'
import './css/Fontstyle.css'

import vegitables from './../img/vegitables.jpg'
import fruits from './../img/fruits.jpg'
import foodgrains from './../img/foodgrains.jpg'
import fruitvegitables from './../img/fruitvegitables.jpg'
import dairy from './../img/dairy.jpg'
import other from './../img/other.jpg'


class Home extends Component  {


  componentDidMount() {

  }

    render() {
       // const isAuth= this.props.isAuth;
       // console.log("this is in home  :"+ isAuth);
    return (
        <div className="Container">
          <h4 className="title">HOME</h4>
          <div id="imagebox">

          
            
            {
              <div className="card">
                <img src={fruits} alt="" />
                <div className="content">
                  <span>Banana, Lemons, Pineapple etc</span>
                  <Link to="./Categories/Fruits">
                    <button type="button">fruits</button>
                  </Link>
                </div>
              </div>
            }
            {
              <div className="card">
                <img src={foodgrains} alt="" />
                <div className="content">
                  <span>Rice, Dal, Corn etc</span>
                  <Link to="./Categories/Foodgrains">
                    <button type="button">foodgrains</button>
                  </Link>
                </div>
              </div>
            }
            {
              <div className="card">
                <img src={fruitvegitables} alt="" />
                <div className="content">
                  <span>Tomatoes, Pumpkins, Cucumbers etc</span>
                  <Link to="./Categories/Fruitvegitables">
                    <button type="button">fruitvegitables</button>
                  </Link>
                </div>
              </div>
            }
            {
              <div className="card">
                <img src={vegitables} alt="" />
                <div className="content">
                  <span>Potatoes, Onions, Carrots etc</span>
                  <Link to="./Categories/Vegitables">
                    <button type="button">vegitables</button>
                  </Link>
                </div>
              </div>
            }
            
            {
              <div className="card">
                <img src={dairy} alt="" />
                <div className="content">
                  <span>Milk, Butter, Cheese etc</span>
                  <Link to="./Categories/DairyProducts">
                    <button type="button">Dairy Products</button>
                  </Link>
                </div>
              </div>
            }
            {
              <div className="card">
                <img src={other} alt="" />
                <div className="content">
                  <span>Oil, Spices, Herbs etc</span>
                  <Link to="./Categories/Others">
                    <button type="button">Others</button>
                  </Link>
                </div>
              </div>
            }

          </div>
        </div>

    )

  }
}


export default Home

