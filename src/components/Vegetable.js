import React from "react";
import {Link} from 'react-router-dom'

import './css/imgbox.css'

import carrot from'./../vegetable/carrot.jpg'
import potato from './../vegetable/potato.jpg'
import leeks from './../vegetable/leeks.png'
import beetroot from './../vegetable/beetroot.jpg'
import bringle from './../vegetable/bringel.jpg'
import pumkin from './../vegetable/pumkin.jpg'
import union from './../vegetable/union.jpg'
import bell from './../vegetable/bell.jpg'
import cucumber from './../vegetable/cucumber.jpg'
import cabbage from './../vegetable/cabbage.jpg'
import mushroom from './../vegetable/mushroom.jpg'
import tomato from './../vegetable/tomato.jpeg'
import lady from './../vegetable/lady.jpg'

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

                    {
                        <div className="minicard">
                            <img src={leeks} alt=""/>
                            <Link to="./About">
                                <button type="button">leeks</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={beetroot} alt=""/>
                            <Link to="./About">
                                <button type="button">beetroot</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={bringle} alt=""/>
                            <Link to="./About">
                                <button type="button">bringle</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={pumkin} alt=""/>
                            <Link to="./About">
                                <button type="button">pumkin</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={union} alt=""/>
                            <Link to="./About">
                                <button type="button">union</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={bell} alt=""/>
                            <Link to="./About">
                                <button type="button">bell pepper</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={cucumber} alt=""/>
                            <Link to="./About">
                                <button type="button">cucumber</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={cabbage} alt=""/>
                            <Link to="./About">
                                <button type="button">cabbage</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={mushroom} alt=""/>
                            <Link to="./About">
                                <button type="button">mushroom</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={tomato} alt=""/>
                            <Link to="./About">
                                <button type="button">tomato</button>
                            </Link>
                        </div>
                    }

                    {
                        <div className="minicard">
                            <img src={lady} alt=""/>
                            <Link to="./About">
                                <button type="button">lady finger</button>
                            </Link>
                        </div>
                    }
                </div>
        </div>

    )
}

export default Vegetable