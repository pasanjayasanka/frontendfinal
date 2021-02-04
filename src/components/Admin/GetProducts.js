import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  

  
const apiUrl = 'https://localhost:44374/api/Product/';  
  
class GetProducts extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           products:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    products:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteProduct(productId) {  
      const { products } = this.state;     
     axios.delete(apiUrl   + productId).then(result=>{  
       alert('Product deleted successfully!!!');   
        this.setState({  
          response:result,  
          products:products.filter(product=>product.productId !== productId)  
        });  
      });  
    }  
   
 
      
    render(){         
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
           
                <div style={{ backgroundColor: 'LightGrey', margin: '5px 5px'}} >  
                
                  <Table>  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Product ID</th> 
                        <th>Supplyer ID</th> 
                        <th>Product Name</th>  
                        <th>Quantity</th>  
                         
                        <th>Category Name</th>  
                        <th>Address</th>  
                        <th>Unit Price</th>  
                        <th>Unit Weight</th> 
                        
                      </tr>  
                    </thead>  
                    <tbody>  
                      {products.map(product => (  
                        <tr key={product.productId}> 
                          <td>{product.productId}</td>  
                          <td>{product.supplierId}</td>   
                          <td>{product.productName}</td>  
                          <td>{product.quantity}</td>  
                          <td>{product.categoryName}</td>  
                          <td>{product.addresse}</td>  
                          <td>{product.unitPrice}</td>  
                          <td>{product.unitWeight}</td>  
                              
                          <td><Button style={{ backgroundColor: 'DarkOliveGreen'}} onClick={() => this.DeleteProduct(product.productId)}>Delete</Button>  
                          
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
  
export default GetProducts;  