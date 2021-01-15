import React from "react";
import {Link} from 'react-router-dom'

import './css/imgbox.css'

import banana from'./../fruit/banana.jpg'
import mango from './../fruit/mango.jpg'
import pineapple from'./../fruit/pineapple.jpg'
//mport avacado from './../fruit/avocados.jpg'
import blue_grapes from'./../fruit/blue grapes.jpg'
import guawa from './../fruit/guava.jpg'
//import papaya from'./../fruit/papaya.jpg'
//import orange from './../fruit/orange.jpg'

const Fruit = () => {
    return(
        <div>
            <h4 className="title">FRUITS</h4>
            <div id="imagebox">
                {
                    <div className="minicard">
                        <img src={banana} alt=""/>
                        <Link to="./About">
                            <button type="button">Banana</button>
                        </Link>
                    </div>
                }

                {
                    <div className="minicard">
                        <img src={mango} alt=""/>
                        <Link to="./About">
                            <button type="button">Mango</button>
                        </Link>
                    </div>
                }

                {
                    <div className="minicard">
                        <img src={pineapple} alt=""/>
                        <Link to="./About">
                            <button type="button">Pineapple</button>
                        </Link>
                    </div>
                }

                {
                    <div className="minicard">
                        <img src={blue_grapes} alt=""/>
                        <Link to="./About">
                            <button type="button">Grapes</button>
                        </Link>
                    </div>
                }
                {
                    <div className="minicard">
                        <img src={guawa} alt=""/>
                        <Link to="./About">
                            <button type="button">Guawa</button>
                        </Link>
                    </div>
                }

            </div>

        </div>
    )
}


export default Fruit

