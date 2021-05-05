import {Component} from "react";
import {Form,Button} from "react-bootstrap";
import {Input} from "reactstrap";

class NewReview extends Component{

    render() {
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
                            <th>Manusha</th>
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