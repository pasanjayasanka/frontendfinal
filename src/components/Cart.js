import React from 'react'
import './css/Fontstyle.css'
import './css/Button.css'
//import Table from "react-bootstrap/Table";
import {Button,Table} from "reactstrap";

const Cart = () => {
  return (
    <div>
      <div className="container">
        <h4 className="title">CART</h4>
          <Table>
              <thead>
              <tr>
                  <th>No</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Price(Rs)</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Carrot</td>
                  <td>5</td>
                  <td>500</td>
                  <td><button class='cartdeletebutton'>Delete</button></td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Milk</td>
                  <td>3</td>
                  <td>350</td>
                  <td><button class='cartdeletebutton'>Delete</button></td>
              </tr>
              <tr>
                  <td></td>
                  <td>Total</td>
                  <td>8</td>
                  <td>850</td>
                  <td></td>
              </tr>
              </tbody>

          </Table>
          <div class='center'>
              <button className='cartBuy'>Buy</button>
          </div>

      </div>
    </div>


  )
}

export default Cart