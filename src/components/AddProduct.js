import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form,  FormGroup, Label, Input, Button } from 'reactstrap';  
import { Link } from 'react-router-dom'

class AddProduct extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
    productName: '',  
    quantity: 0,  
    categoryName: '',  
    addresse: '',
    unitPrice: 0,
    unitWeight: 0 
     
}

}   
Addproduct=()=>{  
  axios.post('https://localhost:44374/api/Product', {productName:this.state.productName,quantity:parseFloat(this.state.quantity),  
  categoryName:this.state.categoryName, addresse:this.state.addresse
  , unitPrice:parseFloat(this.state.unitPrice),  unitWeight:parseFloat(this.state.unitWeight)
})  
.then(json => {  
 
  alert("Product added successfully");  
this.props.history.push('/MyProduct')  

})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container >  
    <h4 className="title">Enter Product Informations</h4>  
    <div className="box">
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="productName" sm={2}>Product Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="productName" onChange={this.handleChange} value={this.state.productName} placeholder="Enter productName" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="quantity" sm={2}>Quantity</Label>  
          <Col sm={10}>  
            <Input type="number" name="quantity" onChange={this.handleChange} value={this.state.quantity} placeholder="Enter Quantity" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="categoryName" sm={2}>Category Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="categoryName" onChange={this.handleChange} value={this.state.categoryName} placeholder="Enter Category Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="addresse" sm={2}>Address</Label>  
          <Col sm={10}>  
            <Input type="text" name="addresse" onChange={this.handleChange} value={this.state.addresse} placeholder="Enter Address" />  
          </Col>  
        </FormGroup> 
        
        <FormGroup row>  
          <Label for="unitPrice" sm={2}>Unit Price</Label>  
          <Col sm={10}>  
            <Input type="number" name="unitPrice" onChange={this.handleChange} value={this.state.unitPrice} placeholder="Enter unitPrice" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="unitWeight" sm={2}>Unit Weigh</Label>  
          <Col sm={10}>  
            <Input type="number" name="unitWeight" onChange={this.handleChange} value={this.state.unitWeight} placeholder="Enter unitWeight" />  
          </Col>  
        </FormGroup>
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <Link to="./MyProduct">
            <Button style={{float: 'right', margin:'10px'}} >Cancel</Button>
            </Link>  
          <Button type="button" style={{float: 'right', margin:'10px'}} onClick={this.Addproduct} className="btn btn-success">Submit</Button>  
          
           
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>
    </div> 
     
  </Container>  
);  
}  
   
}  
export default AddProduct
