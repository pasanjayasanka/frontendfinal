import React, {useState} from "react";
import './css/login.css'
<<<<<<< Updated upstream
import {Link} from "react-router-dom";
import axios from 'axios';
=======
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';




>>>>>>> Stashed changes



const LoginForm = () => {
<<<<<<< Updated upstream

=======
    const history = useHistory();
>>>>>>> Stashed changes
    const [loginData, setLoginData] =useState ({
        //role:'',
        email: '',
        password:''
    });

    const {email,  password} = loginData;
    const onChange = e => setLoginData({...loginData,[e.target.name]:e.target.value})
    const onSubmit =async e=> {
        e.preventDefault();
<<<<<<< Updated upstream
        //console.log("this is login data");
       // console.log(loginData);

=======
        console.log("this is login data");
        console.log(loginData);
>>>>>>> Stashed changes
        axios.post(
            'https://localhost:44374/api/Accounts/Login',
            {Email: loginData.email, Password: loginData.password}
        )
            .then(response=> {
<<<<<<< Updated upstream
                console.log("this is user details from login page");
                console.log(response.data);
                if(response.status === 200){ // check if the response is success
                    console.log("inside redirect")
                                                                      // Store the token and other details in a local storage
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userFirstName', response.data.userFirstName);
                    localStorage.setItem('userLastName', response.data.userLastName);
                    localStorage.setItem('userEmail', response.data.userEmail);
                    localStorage.setItem('userAddress', response.data.userAddress);
                    localStorage.setItem('userPhone', response.data.userPhone);

                    const token = response.data.token;
                                                           //send token to decode
                    const payload =  parseJwt(token);
                                                           // send payload to find role
                    const role = findRole(payload);
                    localStorage.setItem('role', role);
                   // console.log(role);
                    if( role ==="Buyer"){            alert("YOU ARE WELCOME TO GOVIMITHURO ! Customer login"); window.location.replace('/') }
                    if( role ==="Seller"){           alert("YOU ARE WELCOME TO GOVIMITHURO ! Seller login");   window.location.replace('/')  }
                    if( role ==="Administrator"){    alert("YOU ARE WELCOME TO GOVIMITHURO ! Admin login");    window.location.replace('/') }

=======
                console.log("this is response")
                console.log(response)
                if(response.status === 200){ // check if the response is success
                    console.log("inside redirect")
                    alert("YOU ARE WELCOME TO GOVIMITHURO !")
                    history.push('/');
>>>>>>> Stashed changes
                }
            })
            .catch(error => {
                console.log(error);
<<<<<<< Updated upstream
                if(error === "Invalid Authentication" )
                {
                    alert("User name or password invalid ! try again");
                }
                else {
                    console.log(" this is loggin error :" + error );
                }
            })

    }

    // this function decodes the JWT token
    function parseJwt(token){
        const base64Url = token.split('.')[1];
        const base64    = base64Url.replace(/-/g,'+').replace(/_/g,'/');
        const jsonPayload =decodeURIComponent(atob(base64).split('').map(function (c){
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
=======
                if(error.response.data === "Invalid Authentication" );
                {
                    alert("User name or password invalid ! try again")
                }


            })
>>>>>>> Stashed changes
    }

    return(
        <div >
            <form onSubmit={e=> onSubmit(e)}>
<<<<<<< Updated upstream
                <h3 style={{textAlign:'center' ,height:'10px'}}>  USER LOGIN </h3>
                <div className="div_back">
                   <div >
                       <label className="datalabel"> USER NAME</label>
                       <input
                           className="datainput"
                           type="text"
=======
                <h3 className="title">  USER LOGIN </h3>
                <div className="div_back">
                   <div className="row">
                       <label className="datalabel"> USER NAME</label>
                       <input
                           type="text"
                          // class="datainput"
>>>>>>> Stashed changes
                           placeholder="Enter email"
                           name="email"
                           required
                           value={email}
<<<<<<< Updated upstream
                           onChange={(e)=> onChange(e)}
                       />
                   </div>
                    <div >
                        <label className="datalabel"> PASSWORD </label>
                        <input

=======
                          onChange={(e)=> onChange(e)}
                       />
                   </div>
                    <div className="row">
                        <label className="datalabel"> PASSWORD </label>
                        <input
                          //  class="datainput"
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                   <p style={{backgroundColor: "lightgray", textAlign: "center"}}>
=======
                   <p className="my-1">
>>>>>>> Stashed changes
                       Don't have an account? <Link to="./Register">Sign Up</Link>
                   </p>
               </div>

        </div>

    )
}


export default LoginForm