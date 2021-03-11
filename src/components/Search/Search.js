import React, { useState, useEffect } from 'react'
import axios from "axios";
import './Product.css';  


export default function Search() {
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
                <h6>Product - {data.productName}</h6>
                <span>Quantity- {data.quantity}</span> <br />
                <span>Category - {data.categoryName}</span> <br />
                <span>Addresse - {data.addresse}</span> <br />
                <span>Description - {data.productDescription}</span> <br />
                <span>Price - {data.unitPrice}</span> <br />
                <span>Weight - {data.unitWeight}</span> <br />
                <button className="btn btn-light delete-button" >
                    <i className="far fa-trash-alt"></i>
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
            <div className="col-md-12">
                
                    <div className="container text-center">
                        <h4 className="title" >SEARCH</h4>
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
