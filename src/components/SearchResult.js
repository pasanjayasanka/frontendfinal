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
            numOfProducts:'1',
            totalPrice:'220'
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }



    componentDidMount(){
         const {name}=this.props.location.state.name;
       // // console.log(name);

        axios.get(Url ).then(response => response.data).then(
            (result)=>{
                if(name==""){
                    this.setState({products:result });
                }else {
                    console.log('goes');
                    this.setState({products:result.filter((result)=> result.productName.toLowerCase() === this.props.location.state.name.toLowerCase()) });
                    // filtering option
                }
            },
            (error)=>{
                this.setState({error});
            }
        )
    }


    // DeleteProduct(productId) {
    //     const { products } = this.state;
    //     axios.delete(Url   + productId).then(result=>{
    //         alert('Product deleted successfully!!!');
    //         this.setState({
    //             response:result,
    //             products:products.filter(product=>product.productId !== productId)
    //         });
    //     });
    // }

    AddToCart(ProductId) {
        console.log(ProductId);
        console.log( this.state.numOfProducts);
        console.log( this.state.totalPrice);

        const numOfProducts= this.state.numOfProducts;
        const    totalPrice = this.state.totalPrice;
        const data = {numOfProducts,totalPrice};

       // posting cart
        axios.post(
            'https://localhost:44374/api/Cart',
            {data
            })
            .then(json => {
                if(json.data.status==='success'){
                    console.log(json.data.status);
                    alert("Data Save Successfully");
                   // this.props.history.push('/Home')
                }
                else{
                    console.log(json.data.status);
                    alert('Data not Saved');
                    debugger;
                   // this.props.history.push('/Home')
                }
            })
    }

    render(){


        console.log("this");
        console.log(this.props.location.state);
        console.log("this");


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
                                                type="text"
                                                required
                                                name="numOfProducts" onChange={this.handleChange}
                                                value={this.state.numOfProducts} placeholder="Enter Quantity"/>
                                        </td>


                                        <td><Button style={{backgroundColor: '0000CD', margin: '0px 30px'}}
                                                    onClick={() => this.AddToCart(product.productId)}>Add to
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