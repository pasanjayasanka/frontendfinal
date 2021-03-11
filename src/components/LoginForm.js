import React, {useState} from "react";
import './css/login.css'
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';
import  jwtDecode from "jwt-decode";








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


                    // Store the token in a local storage
                    localStorage.setItem('token', response.data.token)
                    const token=response.data.token;
                                                           //send token to decode
                    const payload =  parseJwt(token);
                                                           // send payload to find role
                    const role = findRole(payload);
                   // console.log(role);
                    if( role ==="Buyer"){            alert("YOU ARE WELCOME TO GOVIMITHURO ! Customer login"); history.push('/');   }
                    if( role ==="Seller"){           alert("YOU ARE WELCOME TO GOVIMITHURO ! Seller login");   history.push('/MyProduct');   }
                    if( role ==="Administrator"){    alert("YOU ARE WELCOME TO GOVIMITHURO ! Admin login");    history.push('/Admin/AdminPanel');   }

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

    // this function decodes the JWT token
    function parseJwt(token){
        var base64Url = token.split('.')[1];
        var base64    = base64Url.replace(/-/g,'+').replace(/_/g,'/');
        var jsonPayload =decodeURIComponent(atob(base64).split('').map(function (c){
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }


    // this function finds the role from the JWT token
    function findRole(payload){
        for(var propName in payload){
            if(payload.hasOwnProperty(propName)){
                var propValue = payload[propName];
                //console.log(propValue);
                if(propValue === "Buyer"){
                    return "Buyer"
                }
                if(propValue === "Administrator"){
                    return "Administrator"
                }
                if(propValue === "Seller"){
                    return "Seller"
                }

            }
        }
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
                   <p style={{backgroundColor: "lightgray", textAlign: "center"}}>
                       Don't have an account? <Link to="./Register">Sign Up</Link>
                   </p>
               </div>

        </div>

    )
}


export default LoginForm