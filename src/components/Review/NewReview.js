import React,{Component} from "react";
import {Form,Button} from "react-bootstrap";
import {Input} from "reactstrap";

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
            "count":3
        },
        errors:{},
    });

    reduction=() => {
        this.data.count -=1;
    }

    increase=() => {

    }

    render() {

        const {error,data} = this.state;

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
                            <Input name="newreview"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Give a rating to the product</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={() => this.reduction()}>-</Button>
                            <span>{data.count}</span>
                            <Button onClick={() => this.increase()}>+</Button>
                        </Form.Group>
                        <Button variant="primary">Send</Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default NewReview;