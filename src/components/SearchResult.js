import React from 'react';
import {Table, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {Input} from "reactstrap";
import './css/login.css';

const Url = 'https://localhost:44374/api/Product/';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            products:[],
            response: {},
        }
    }

    componentDidMount(){
         const {name}=this.props.location.state.name;


        axios.get(Url ).then(response => response.data).then(
            (result)=>{
                if(name===""){
                    this.setState({products:result });
                }else {
                    //console.log('inside filter');
                    this.setState({products:result.filter((result)=> result.productName.toLowerCase() === this.props.location.state.name.toLowerCase()) });
                    // filtering option
                }
            },
            (error)=>{
                this.setState({error});
            }
        )
    }




    render(){


       // console.log("this");
       // console.log(this.props.location.state);
      //  console.log("this");


        const{error,products}=this.state;

        if(error){
            return(
                <div className="center"><h4>Error : {error.message}!!!</h4></div>
            )
        }
        else
        {
            return(

                <div >


                    {/*by using this.props.state.variablename helps to pass arguments between components*/}
                    <h5 className="center">Search Results for {this.props.location.state.name}</h5>


                        <div style={{backgroundColor:'darkgrey', margin:'20px 30px', padding:'10px'}}>

                                <Table >
                                <thead className="btn-primary">
                                <tr>
                                    <th>Product Name</th>
                                    {/*<th>Category Name</th>*/}
                                    {/*<th>Quantity</th>*/}
                                    <th>Address</th>
                                    <th>Unit Price (Rs)</th>
                                    {/*<th>Unit Weight</th>*/}
                                    <td></td>
                                    <th>More Details</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor:'lightgrey'}}>
                                {products.map(product => (
                                    <tr key={product.productId}>

                                        <td>{product.productName}</td>
                                        {/*<td>{product.categoryName}</td>*/}
                                        {/*<td>{product.quantity}</td>*/}
                                        <td>{product.addresse}</td>

                                        <td>{product.unitPrice}</td>
                                        {/*<td>{product.unitWeight}</td>*/}

                                        <td></td>
                                        <td>
                                            {/*this sends the product detail to the description component once the view button is clicked*/}
                                            <Link to={{pathname:'./Description', state:{
                                                    productName: product.productName,
                                                    quantity   : product.quantity,
                                                    categoryName: product.categoryName,
                                                    address    : product.addresse,
                                                    pictureID : product.picture,
                                                    description: product.description,
                                                    unitPrice : product.unitPrice,
                                                    unitWeight: product.unitWeight,
                                                } }}>
                                                <button   style={{height:'40px', width:'100px', backgroundColor: "darkgreen",color:'whitesmoke' }}> View </button>
                                            </Link>
                                        </td>


                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>


                </div>
            )
        }
    }


}

export default SearchResult;