import React, { useState, useEffect } from 'react'
import axios from "axios";
import './../MyProducts/Product.css';  


export default function Fruits() {
    const [product, setProductList] = useState([])

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
                <b><h6> {data.productName}</h6></b>
                <span> Rs.{data.unitPrice}</span> <br />
                <span>Weight(kg)-{data.unit}</span> <br />
                <span>Address - {data.addresse}</span> <br />
                <span>Quantity - {data.quantity}</span> <br />
                <span>Description - {data.productDescription}</span> <br /> 
                <button className="btn btn-light delete-button">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                
                    <div className="container text-center">
                        <h4 className="title" >Add Products</h4>
                    </div>
                </div> 
            
            <div className="col-md-12" style={{  margin: '0px 30px' }}>
                <table >
                    <tbody >
                        {
                           
                            
                            product.filter((productList)=>((productList.categoryName.toLowerCase()==='fruits')||(productList.categoryName.toLowerCase()==='fruit')))
                            .map((productList) =>
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
