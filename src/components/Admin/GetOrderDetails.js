import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  

  
const apiUrl = 'https://localhost:44374/api/OrderDetails/';  
  
class GetOrderDetails extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           orderdetails:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    orderdetails:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
     
   
 
      
    render(){         
        const{error,orderdetails}=this.state;  
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
                        <th>Order Id</th> 
                        <th>Product Id</th>  
                        <th>Unit Price</th>    
                        <th>Quantity</th>   
                        <th>Order Number</th>  
                       
                        
                      </tr>  
                    </thead>  
                    <tbody>  
                      {orderdetails.map(orderdetail => (  
                        <tr key={orderdetail.orderId}>  
                          <td>{orderdetail.orderId}</td>   
                          <td>{orderdetail.productId}</td>  
                          <td>{orderdetail.unitPrice}</td>  
                          <td>{orderdetail.quantity}</td>  
                          <td>{orderdetail.orderNumber}</td>  
                          
                              
                           
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
  
export default GetOrderDetails