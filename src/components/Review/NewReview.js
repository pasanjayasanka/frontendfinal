import {Component} from "react";
import {Form,Button} from "react-bootstrap";
import {Input} from "reactstrap";
import axios from 'axios';

class NewReview extends Component{

    constructor(props) {
        super(props);
        this.state = {
            error:null,
            data: {
                "firstName": localStorage.getItem('userFirstName'),
            },
            errors: {}
        }
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
                            <th>Orange</th>
                        </tr>
                        <tr>
                            <th>Feedback Send as:</th>
                            <th>{data.firstName}</th>
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
                            <Input name="newreview"/>
                        </Form.Group>
                        <Button variant="primary">Send</Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default NewReview;