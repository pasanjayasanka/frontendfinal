import React from 'react';  
import { Table} from 'react-bootstrap';  
import axios from 'axios';  

  
const apiUrl = 'https://localhost:44374/api/Cart/';  
  
class GetCarts extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           carts:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                  carts:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
     
   
 
      
    render(){         
        const{error,carts}=this.state;  
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
                        <th>Cart Id</th> 
                        <th>Num Of Products</th>  
                        <th>Total Price</th>    
                         
                       
                        
                      </tr>  
                    </thead>  
                    <tbody>  
                      {carts.map(cart => (  
                        <tr key={cart.productID}>  
                          <td>{cart.productID}</td>   
                          <td>{cart.numOfProducts}</td>  
                          <td>{cart.totalPrice }</td>  
                          
                          
                              
                           
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
  
export default GetCarts