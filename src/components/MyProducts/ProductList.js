import React, { useState, useEffect } from 'react'
import Product from './Product'
import axios from "axios";
import './Product.css';  

export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshProductList();
    }, [])

    const productAPI = (url = 'https://localhost:44374/api/Product/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshProductList() {
        productAPI().fetchAll()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('productId') === "0")
        productAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))
        else
        productAPI().update(formData.get('productId'), formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
        productAPI().delete(id)
                .then(res => refreshProductList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="minicard" style={{ backgroundColor: 'white'  }} onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} style={{  margin: '0px 30px' }} className="card-img-top thumbnail" alt ="product" />
            <div  >
                <h6>Product - {data.productName}</h6>
                <span>Quantity- {data.quantity}</span> <br />
                <span>Category - {data.categoryName}</span> <br />
                <span>Addresse - {data.addresse}</span> <br />
                <span>Description - {data.productDescription}</span> <br />
                <span>Price - {data.unitPrice}</span> <br />
                <span>Weight - {data.unitWeight}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.productId))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div >
                    <div className="container text-center">
                        <h4 className="title" >Add Products</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <Product
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-9">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(productList.length / 4))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(productList[4 * i])}</td>
                                    <td>{productList[4 * i + 1] ? imageCard(productList[4 * i + 1]) : null}</td>
                                    <td>{productList[4 * i + 2] ? imageCard(productList[4 * i + 2]) : null}</td>
                                    <td>{productList[4 * i + 3] ? imageCard(productList[4 * i + 3]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

