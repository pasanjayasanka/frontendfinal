import React,{Component} from "react";
import {Form,Button} from "react-bootstrap";
import {FormFeedback, Input} from "reactstrap";

import axios from 'axios';

class NewReview extends Component{

    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data:{
            "product": this.props.location.state.product,
            "email": this.props.location.state.farmermail,
            "firstName": localStorage.getItem('userFirstName'),
            "review": '',
            "count":'',
            "date": ''
        },
        errors:{},
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

        if (data.review === '') errors.review = 'First Name can not be blank.';
        if (data.count === '') errors.count = 'Last Name can not be blank.';
        if (data.date === '') errors.date = 'Address can not be blank.';

        return errors;
    }

    handleSubmit = (e) => {
        console.log('inside');
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();
        console.log('inside');

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            console.log("ok");

        } else {
            this.setState({ errors });
        }
    }

    Savedata(){
        console.log("enter");
    }


    render() {

        const {errors,data} = this.state;

        return(
            <div className="tab">
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Product :</th>
                            <th>{data.product}</th>
                        </tr>
                        <tr>
                            <th>Feedback Send as:</th>
                            <th>{data.firstName}</th>
                        </tr>
                        <tr>
                            <th>Farmer Email:</th>
                            <th>{data.email}</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter your feedback about this product</Form.Label>
                            <Input value={data.review} invalid={errors.review ? true : false} name="review" onChange={this.handleChange}/>
                            <FormFeedback>{errors.review}</FormFeedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Give a rating to the product</Form.Label>
                            <Input value={data.count} invalid={errors.count ? true : false} name="count" onChange={this.handleChange}/>
                            <FormFeedback>{errors.count}</FormFeedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Input value={data.date} invalid={errors.date ? true : false} name="date" onChange={this.handleChange}/>
                            <FormFeedback>{errors.date}</FormFeedback>
                        </Form.Group>
                        <Button variant="primary" onClick={() => this.Savedata()}>Send</Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default NewReview;