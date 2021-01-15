import React from "react";
import {Link} from 'react-router-dom'

import './css/imgbox.css'

import carrot from'./../vegetable/carrot.jpg'
import potato from './../vegetable/potato.jpg'

const Vegetable = () => {
    return(
        <div>
            <h4 className="title">VEGETABLES</h4>
            <div id="imagebox">
                {
                    <div className="minicard">
                        <img src={carrot} alt=""/>
                        <Link to="./About">
                            <button type="button">Carrot</button>
                        </Link>
                    </div>
                }

                {
                    <div className="minicard">
                        <img src={potato} alt=""/>
                        <Link to="./About">
                            <button type="button">potato</button>
                        </Link>
                    </div>
                }
            </div>
        </div>

    )
}

export default Vegetable