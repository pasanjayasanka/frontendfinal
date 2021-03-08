import React, {useState} from "react";
import './css/login.css'
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';







const LoginForm = () => {
    const history = useHistory();
    const [loginData, setLoginData] =useState ({
        //role:'',
        email: '',
        password:''
    });

    const {email,  password} = loginData;
    const onChange = e => setLoginData({...loginData,[e.target.name]:e.target.value})
    const onSubmit =async e=> {
        e.preventDefault();
        console.log("this is login data");
        console.log(loginData);
        axios.post(
            'https://localhost:44374/api/Accounts/Login',
            {Email: loginData.email, Password: loginData.password}
        )
            .then(response=> {
                console.log("this is response")
                console.log(response)
                if(response.status === 200){ // check if the response is success
                    console.log("inside redirect")
                    alert("YOU ARE WELCOME TO GOVIMITHURO !")
                    history.push('/');
                }
            })
            .catch(error => {
                console.log(error);
                if(error.response.data === "Invalid Authentication" );
                {
                    alert("User name or password invalid ! try again")
                }


            })
    }

    return(
        <div >
            <form onSubmit={e=> onSubmit(e)}>
                <h3 className="title">  USER LOGIN </h3>
                <div className="div_back">
                   <div className="row">
                       <label className="datalabel"> USER NAME</label>
                       <input
                           type="text"
                          // class="datainput"
                           placeholder="Enter email"
                           name="email"
                           required
                           value={email}
                          onChange={(e)=> onChange(e)}
                       />
                   </div>
                    <div className="row">
                        <label className="datalabel"> PASSWORD </label>
                        <input
                          //  class="datainput"
                            type="password"
                            placeholder="Enter password "
                            name="password"
                            required
                            value={password}
                            onChange={(e)=> onChange(e)}
                            minLength="5"
                        />
                    </div>
                    <button className="loginbutton" > Login</button>
                </div>
            </form>
               <div>
                   <p className="my-1">
                       Don't have an account? <Link to="./Register">Sign Up</Link>
                   </p>
               </div>

        </div>

    )
}


export default LoginForm