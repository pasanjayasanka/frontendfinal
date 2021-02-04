import React from 'react';  
import axios from 'axios';  
import { Container, Col, Form,  FormGroup, Label, Input, Button } from 'reactstrap';  

class AddProduct extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
    productName: '',  
    quantity: 1,  
    categoryName: '',  
    addresse: '',
    //unitPrice: '',
    //unitWeight: '' 
     
}

}   
Addproduct=()=>{  
  axios.post('https://localhost:44374/api/Product', {productName:this.state.productName,quantity:this.state.quantity,  
  categoryName:this.state.categoryName, addresse:this.state.addresse
  //, unitPrice:this.state.unitPrice,  unitWeight:this.state.unitWeight
})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Productlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Productlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Product Informations</h4>  
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
        {/*
        <FormGroup row>  
          <Label for="unitPrice" sm={2}>unitPrice</Label>  
          <Col sm={10}>  
            <Input type="number" name="unitPrice" onChange={this.handleChange} value={this.state.unitPrice} placeholder="Enter unitPrice" />  
          </Col>  
        </FormGroup>
        <FormGroup row>  
          <Label for="unitWeight" sm={2}>unitPrice</Label>  
          <Col sm={10}>  
            <Input type="number" name="unitWeight" onChange={this.handleChange} value={this.state.unitWeight} placeholder="Enter unitWeight" />  
          </Col>  
        </FormGroup>*/}
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addproduct} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
export default AddProduct
