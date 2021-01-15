import React from "react";
import './css/login.css'
import {Link} from "react-router-dom";



const LoginForm = () => {
    return(
        <div >
            <form>
                <h3 className="title">  USER LOGIN </h3>
                <div className="div_back">
                   <div class="row">
                       <label class="datalabel"> USER NAME</label>
                       <input type="text" class="datainput" placeholder="Enter user name" name="username" required/>
                   </div>
                    <div class="row">
                        <label class="datalabel"> PASSWORD </label>
                        <input type="text" placeholder="Enter password " name="password" required/>
                    </div>

                    <button class="loginbutton"> Login</button>

                    <Link to="./Login">
                    <button class="cancelbutton"> Cancel </button>
                    </Link>
                </div>
            </form>

        </div>

    )
}


export default LoginForm