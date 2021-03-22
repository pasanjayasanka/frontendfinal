import React, { Component } from 'react'
import axios from 'axios'
import { Form, Label,Input,FormGroup, FormFeedback, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class Checkout extends Component  {
  

    constructor(props) {
      super(props);

      this.state = this.getInitialState();
  }

  getInitialState = () => ({
        data:{      
        'cardName': '',
        'cardNo': '',
        'expDate': '',
        'billDate':'',
        'cvv': '',
        },
<<<<<<< Updated upstream

=======
  
>>>>>>> Stashed changes
      errors: {}
  });
  handleChange = (e) => {
    this.setState({
        
      data: {
        ...this.state.data,
        [e.target.name]:e.target.value
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

  if (data.cardName === '') errors.cardName = 'Card holder can not be blank.';
  if (data.cardNo === '') errors.cardNo = 'Card no can not be blank.';
  if (data.expDate === '') errors.expDate = 'Expire date can not be blank.';
  if (data.billDate === '') errors.billDate = 'Bill date can not be blank.';
  if (data.cvv === '') errors.cvv = 'CVV can not be blank.';
  
  return errors;
}

handleSubmit = (e) => {
  e.preventDefault();

  const { data} = this.state;

  const errors = this.validate();

  if (Object.keys(errors).length === 0) {
      console.log(data);
      //Call an api here
      axios.post('https://localhost:44374/api/BillingInfo/',{cardName:this.state.data.cardName,cardNo:this.state.data.cardNo,expDate:this.state.data.expDate,billDate:this.state.data.billDate,cvv:parseFloat(this.state.data.cvv)})
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
        <h4 className="center">CREDIT CARD CHECKOUT</h4>
            <div id="Registerbox">
             <div className="box">
          <Form onSubmit={this.handleSubmit}>
          
          <FormGroup>
              <Label for="cardName">Card Holder's Name</Label>
              <Input value={data.cardName} invalid={errors.cardName? true : false} name="cardName" onChange={this.handleChange} />
              <FormFeedback>{errors.cardName}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="cardNo">Card Number</Label>
              <Input value={data.cardNo} invalid={errors.cardNo? true : false} name="cardNo" onChange={this.handleChange} />
              <FormFeedback>{errors.cardNo}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="expDate">Expiration Date</Label>
              <Input  value={data.expDate} invalid={errors.expDate? true : false} name="expDate" onChange={this.handleChange} />
              <FormFeedback>{errors.expDate}</FormFeedback>
          </FormGroup>         
          <FormGroup>
              <Label for="billDate">Bill Date</Label>
              <Input value={data.billDate} invalid={errors.billDate? true : false} name="billDate" onChange={this.handleChange} />
              <FormFeedback>{errors.billDate}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label for="cvv">CVV</Label>
              <Input value={data.cvv} invalid={errors.cvv? true : false} name="cvv" onChange={this.handleChange} />
              <FormFeedback>{errors.cvv}</FormFeedback>
          </FormGroup>
<<<<<<< Updated upstream
               
=======
         
                   
>>>>>>> Stashed changes
          <Button color="primary" >PAY</Button>
          <Link to={{pathname:'./Receipt', state:{billingid:data.billingID,cardname:data.cardName,cardno:data.cardNo,expdate:data.expDate,cvv:data.cvv,billdate:data.billDate} }}>
            <Button color="primary">Bill</Button>
          </Link>
          
      </Form>
      </div>
      </div>
      </div>
        )
       
        }

      }
       

export default Checkout

