import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

class FarmerRForm extends Component  {
  

    constructor(props) {
      super(props);

      this.state = this.getInitialState();
  }

  getInitialState = () => ({
      data: {
        
        "farmerFName": '',
        "farmerLName": '',
        "address": '',
        "ascrNo": '',
        "agriBranch": '',
        "nic": '',
        "password": '',
        "phone":''
        
    },
      errors: {}
  });
  handleChange = (e) => {
    this.setState({
        data: {
            ...this.state.data,
            [e.target.name]: e.target.value
        },
        errors: {
            ...this.state.errors,
            [e.target.name]: ''
        }
    });
}
validate = () => {
  const { data } = this.state;
  let errors = {};

  if (data.farmerFName === '') errors.farmerFName = 'First Name can not be blank.';
  if (data.farmerLName === '') errors.farmerLName = 'Last Name can not be blank.';
  if (data.address === '') errors.address = 'Address can not be blank.';
  if (data.ascrNo === '') errors.ascrNo = 'AscrNo can not be blank.';
  if (data.agriBranch === '') errors.agriBranch = 'AgriBranch can not be blank.';
  if (data.nic === '') errors.nic = 'nic can not be blank.';
  if (data.phone === '') errors.phone = 'phone can not be blank.';
  if (data.password === '') errors.password = 'Password must be valid.';
  if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';
  
  return errors;
}

handleSubmit = (e) => {
  e.preventDefault();

  const { data } = this.state;

  const errors = this.validate();

  if (Object.keys(errors).length === 0) {
      console.log(data);
      //Call an api here
      axios.post('https://localhost:44374/api/Farmer',data)
      //Resetting the form
      this.setState(this.getInitialState());
  } else {
      this.setState({ errors });
  }
}



  render(){  
    const { data, errors } = this.state; 
        return(
          <div className="Container">
        <h4 className="center">FARMER REGISTER</h4>
            <div id="Registerbox">
             <div className="box">
          <Form onSubmit={this.handleSubmit}>
          
          <FormGroup>
              <Label for="farmerFName">First Name</Label>
              <Input  value={data.farmerFName} invalid={errors.farmerFName ? true : false} name="farmerFName" onChange={this.handleChange} />
              <FormFeedback>{errors.farmerFName}</FormFeedback>
          </FormGroup>

          <FormGroup>
              <Label for="farmerLName">Last Name</Label>
              <Input  value={data.farmerLName} invalid={errors.farmerLName? true : false} name="farmerLName" onChange={this.handleChange} />
              <FormFeedback>{errors.farmerLName}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="address">Address</Label>
              <Input  value={data.address} invalid={errors.address? true : false} name="address" onChange={this.handleChange} />
              <FormFeedback>{errors.address}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="ascrNo">Agriculture service center registration no</Label>
              <Input  value={data.ascrNo} invalid={errors.ascrNo? true : false} name="ascrNo" onChange={this.handleChange} />
              <FormFeedback>{errors.ascrNo}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="agriBranch">Agriculture Branch</Label>
              <Input  value={data.agriBranch} invalid={errors.agriBranch? true : false} name="agriBranch" onChange={this.handleChange} />
              <FormFeedback>{errors.agriBranch}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="nic">NIC</Label>
              <Input  value={data.nic} invalid={errors.nic? true : false} name="nic" onChange={this.handleChange} />
              <FormFeedback>{errors.nic}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="phone">Phone</Label>
              <Input  value={data.phone} invalid={errors.phone? true : false} name="phone" onChange={this.handleChange} />
              <FormFeedback>{errors.phone}</FormFeedback>
          </FormGroup>

          <FormGroup>
              <Label for="password">Password</Label>
              <Input value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
              <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>

          <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input  value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>
                
          <Button color="primary" >Register</Button>
      </Form>
      </div>
      </div>
      </div>
        )
       
        }
      }
 
export default FarmerRForm