import React from 'react';
import {Table, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {Input} from "reactstrap";

const Url = 'https://localhost:44374/api/Product/';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            products:[],
            response: {},

            //this is for data in the cart
            numOfProducts:1,
            totalPrice:220
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
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


    AddToCart(Product) {
        console.log("the total price is");
        console.log(Product.unitPrice * this.state.numOfProducts);
        console.log( this.state.numOfProducts);


        //const Total = Product.productID;

        // const numOfProducts= parseInt(this.state.numOfProducts);
        // const totalPrice = parseInt(this.state.totalPrice);
        // const data = {numOfProducts,totalPrice};
        // console.log(data);

       // posting cart
        axios.post(
            'https://localhost:44374/api/Cart',
            {numOfProducts: parseInt(this.state.numOfProducts),totalPrice : parseInt(this.state.numOfProducts )* Product.unitPrice}
            )
            .then(response=> {
                //console.log(response.status)
               // console.log(response)
                if(response.status === 201){
                    alert("Data Save Successfully");
                }
            })
            .catch(error => {
                console.log(error);
            })

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


                        <div style={{backgroundColor:'#BDB76B', margin:'20px 30px', padding:'10px'}}>

                                <Table>
                                <thead className="btn-primary">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Category Name</th>
                                    <th>Quantity</th>
                                    <th>Address</th>
                                    <th>Unit Price</th>
                                    <th>Unit Weight</th>
                                    <th>Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products.map(product => (
                                    <tr key={product.productId}>

                                        <td>{product.productName}</td>
                                        <td>{product.categoryName}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.addresse}</td>
                                        <td>{product.unitPrice}</td>
                                        <td>{product.unitWeight}</td>
                                        <td>
                                            <Input
                                                type="number"
                                                required
                                                name="numOfProducts" onChange={this.handleChange}
                                                value={this.state.numOfProducts} placeholder="Enter Quantity"/>
                                        </td>


                                        <td><Button style={{backgroundColor: '0000CD', margin: '0px 30px'}}
                                                    onClick={() => this.AddToCart(product)}>Add to
                                            cart</Button>

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