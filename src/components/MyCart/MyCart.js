import React, { useState, useEffect } from 'react'
import './../MyProducts/Product.css';  
import { Table,Button } from 'react-bootstrap'; 
import {Link} from 'react-router-dom'
import Cartsvg from './../../img/shoppingcart.svg'
  

export default function MyCart() {
   
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const removeProduct = id => {
        if(window.confirm("Do you want to remove this product?")){
            cart.forEach((item, index) => {
                if(item.productId === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }



    const reduction = id => {
        cart.forEach(item =>{
            if(item.productId === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item.productId === id){
                item.quantity += 1 ;
            }
        })
        setCart([...cart])
    }
    
    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.unitPrice * item.quantity)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])
    
    


    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])



    if(cart.length === 0)
    return <h3 style={{textAlign: "center", fontSize: "4rem"}}>Cart is Empty!!!</h3>

    return (
    <div className="row">

                    

        <div className="container">
            <div className="col-md-12">
                
                    <div className="container text-center">
                        <h4 className="title" >MY CART</h4>
                    </div>
                </div> 
            
            <div className="col-md-12" style={{  margin: '0px 30px' }}>
            <Table striped bordered hover variant="dark"  >  
                    <thead className="btn-primary">  
                      <tr >  
                        <th className="text-center">Product</th> 
                        <th className="text-center">Product Name</th>  
                        <th className="text-center">Unit Price</th>  
                        <th className="text-center">Unit Weight(kg/l)</th> 
                        <th className="text-center">Quantity</th> 
                        <th className="text-center">Remove</th>  
                      </tr>  
                    </thead>  
                    <tbody >  
                      {cart.map(product => (  
                        <tr key={product.productId} style={{   border: '2px solid DimGrey' }} >  
                          <td ><img src ={product.imageSrc} className="imgcard "/></td>     
                          <td className="text-center">{product.productName}</td>    
                          <td className="text-center">Rs.{product.unitPrice}</td>  
                          <td className="text-center">{product.unitWeight}</td>     
                          <td className="text-center"><button className="count" onClick={() => reduction(product.productId)}> - </button>
                               <span> {product.quantity} </span>
                               <button className="count" onClick={() => increase(product.productId)}> + </button>  
                            </td>
                          <td className="text-center"><Button style={{ backgroundColor: 'DarkOliveGreen'}} onClick={() => removeProduct(product.productId)}>
                          <i className="far fa-trash-alt"></i></Button></td> 
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table> 
                  
                  <div style={{  margin: '0px 240px' }}>
           <div className="searchcard  col-md-3 right" >
               <Link to='./../Checkout'><h6>Payment</h6></Link>              
           </div>
                  <div className="searchcard col-md-4 "  >               
               <h6>Total : Rs.{total}</h6>
           </div>
           </div>      
            </div>
               
        </div>
     
           </div >

    )
}
