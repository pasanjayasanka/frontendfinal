import React from 'react';  
import { Table} from 'react-bootstrap';  
import axios from 'axios';  

  
const apiUrl = 'https://localhost:44374/api/Category/';  
  
class GetCategories extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           categories:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    categories:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
     
   
 
      
    render(){         
        const{error,categories}=this.state;  
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
                
                  <Table striped bordered hover variant="dark">  
                    <thead className="btn-primary">  
                      <tr>  
                        <th>Category ID</th> 
                        <th>Category Name</th>  
                        <th>Description</th>    
                         
                       
                        
                      </tr>  
                    </thead>  
                    <tbody>  
                      {categories.map(category => (  
                        <tr key={category.categoryID}>  
                          <td>{category.categoryID}</td>   
                          <td>{category.categoryName}</td>  
                          <td>{category.description}</td>  
                          
                          
                              
                           
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
  
export default GetCategories