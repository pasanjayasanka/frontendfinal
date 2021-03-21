import React from 'react'
import './css/Fontstyle.css'
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";





const NotLoggedIn = () => {
    return (
        <div style={{textAlign:'center'}}>

                <Card style={{ backgroundColor:'lightgrey'}}>
                    <div >
                        <Link to={'/'}> <h3 style={{ textAlign:'center'}}> Back to Homepage</h3></Link>

                        <Link to={'/LoginForm'}> <p style={{ textAlign:'center'}}> Login As different user</p></Link>
                    </div>
                </Card>


        </div>
    )
}

export default NotLoggedIn
