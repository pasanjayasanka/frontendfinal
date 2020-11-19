import React from 'react'
import {  Row } from 'reactstrap';
const About = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">ABOUT</h4>
        <div id="Registerbox">
             <div className="box">
      <Row>
        <p>This project is aimed at how the farmers can improve the efficiency of 
          transaction between buyers so that the quality and the freshness of the product will be 
          saved until it reaches to the consumers. Not only for whole sellers, it also facilitate ordinary people to 
          buy from farmer directly as convenience.  </p>
          </Row>
          <Row>
          <p>The outcome consists of web application and mobile app. Each transaction is done 
            through the website so that 1% of commission will be charged per transaction.  </p>
            </Row>
            <Row>
            <p>Buyer should pay 10% of the order bill through online.Balance can be paid to the farmer 
              directly when buying the.</p>
              </Row>
              <Row>
              <p>Farmers can collect other 9%  from the agricultural center in their area directly. </p>
              </Row>
              </div>
              </div>
      </div>
    </div>
  )
}

export default About
