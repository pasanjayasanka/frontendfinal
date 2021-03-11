import React, { useState, useEffect } from 'react'
import axios from "axios";
import './../MyProducts/Product.css';  
import './Search.css';  
import Cartsvg from './../../img/shoppingcart.svg'

export default function Search() {
    const [product, setProductList] = useState([])
    const [cart, setCart] = useState([])
  
   const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.productId !== id
        })
        if(check){
            const data = product.filter(product =>{
                return product.productId=== id
            })
            setCart([...cart, ...data])
            
        }else{
            alert("The product has been added to cart.")
            
        }
    } 
    


    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    useEffect(() => {
        refreshProductList();
    })

    const productAPI = (url = 'https://localhost:44374/api/Product/') => {
        return {
            fetchAll: () => axios.get(url),
         
        }
    }

    function refreshProductList() {
        productAPI().fetchAll()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }


    const imageCard = data => (
        <div className="productminicard" style={{ backgroundColor: 'white'  }} >
            <img src={data.imageSrc} style={{  margin: '0px 30px' }} className="productcard-img-top thumbnail" alt ="Add_produt_image" />
            <div  >
                <b><h6>Product - {data.productName}</h6></b>
                <span> Rs.{data.unitPrice}</span> <br />
                <span>Weight(kg/l)-{data.unit}</span> <br />
                <span>Category - {data.categoryName}</span> <br />
                <span>Address - {data.addresse}</span> <br />
                <span>Quantity - {data.quantity}</span> <br />
                <span>Description - {data.productDescription}</span> <br />
                <button className="btn btn-light delete-button" onClick={() => addCart(data.productId)}>
                <i class="fas fa-cart-arrow-down"></i>
                </button>
            </div>
        </div>
    )

    const [searchName, setSearchName] = useState('');
    const nameFilter = (event) => setSearchName(event.target.value.toLowerCase());

    const [searchAddress, setSearchAddress] = useState('');
    const addressFilter = (event) => setSearchAddress(event.target.value.toLowerCase());

    return (
        <div className="row">
                    <div className="container text-center col-md-11 ">
                        <h4 className="title" >SEARCH</h4>
                    </div>
                    <div className=" col-md-1  cartcard  right">
                    <div   className="cart-icon ">      
                    <img src={Cartsvg} alt="" width="40" /> 
                     <span >{cart.length}</span>   
                     </div>
        </div> 
                <div className="col-md-3"></div>      
                    <div className="col-md-2 searchcard">
                    <input type="search"
                        className="form-control" placeholder={'Search by Product Name'} onChange={nameFilter}/>
                    </div>
                    <div className="col-md-1 "></div>    
                    <div className="col-md-2 searchcard">
                    <input type="search"
                        className="form-control" placeholder={'Search by Address'} onChange={addressFilter}/>
                    </div>    
               
            
            
            <div className="col-md-12" style={{  margin: '0px 30px' }}>
                <table >
                    <tbody >
                        {
                           
                            
                            product.filter((productList)=>{
                                if (searchName === "" && searchAddress === "")
                                { return productList}
                             
                                else if (productList.productName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) && searchAddress === "")
                                   { return productList}
                                
                                else if (productList.addresse.toLocaleLowerCase().includes(searchAddress.toLocaleLowerCase()) && searchName === "")
                                   { return productList}   

                                else if (productList.productName.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()) && productList.addresse.toLocaleLowerCase().includes(searchAddress.toLocaleLowerCase()))
                                   { return productList}   

                             }).map((productList) =>
                                <tc>
                                    <td >{imageCard(productList)}</td>   
                                </tc>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}