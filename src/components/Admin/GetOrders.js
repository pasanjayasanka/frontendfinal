import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  

  
const apiUrl = 'https://localhost:44374/api/Order/';  
  
class GetOrders extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           orders:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    orders:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
     
   
 
      
    render(){         
        const{error,orders}=this.state;  
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
                        <th>Customer Id</th>  
                        <th>Quantity</th>    
                        <th>Required Date</th>  
                        <th>Orderd Date</th>  
                        <th>Order Number</th>  
                       
                        
                      </tr>  
                    </thead>  
                    <tbody>  
                      {orders.map(order => (  
                        <tr key={order.orderId}>  
                          <td>{order.orderId}</td>   
                          <td>{order.customerId}</td>  
                          <td>{order.quantity}</td>  
                          <td>{order.requiredDate}</td>  
                          <td>{order.orderdDate}</td>  
                          <td>{order.orderNumber}</td>  
                          
                              
                           
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
  
export default GetOrders