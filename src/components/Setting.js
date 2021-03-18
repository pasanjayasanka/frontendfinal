import React, {Component} from "react";
import {Tab,Tabs,Button,Nav,Row,Col,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Button.css';
import axios from 'axios';

const customerUrl = 'https://localhost:44374/api/Customer'

class Setting extends Component {

    num = 1;

    constructor(props) {
        super(props);
        this.state = {
            error:null,
            users:[],

        }
    }

    componentDidMount(){

        const {id} = 1;

        axios.get(customerUrl ).then(response => response.data).then(
            (result)=>{
                if(id===""){
                    this.setState({users:result });
                }else {
                    //console.log('inside filter');
                    this.setState({users:result.filter((result)=> result.productName.toLowerCase() === this.props.location.state.name.toLowerCase()) });
                    // filtering option
                }
            },
            (error)=>{
                this.setState({error});
            }
        )
        console.log("yes");

    }

    render() {
        return(
            <div className="tab">
                <h4 className="title">Profile Settings</h4>
                <div>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Role</Form.Label>
                                <Form.Control  placeholder="Role of the user" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control  placeholder="Name Of the user" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridid">
                                <Form.Label>ID</Form.Label>
                                <Form.Control  placeholder="Id of the user" />
                            </Form.Group>

                        </Form.Row>
                    </Form>
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">General</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Security</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Delete Account</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div>
                                        <Form>
                                            <Form.Group controlId="formBasicFName">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control placeholder="User First Name" />

                                            </Form.Group>

                                            <Form.Group controlId="formBasicLName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control placeholder="User Last Name" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicAddress">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="User Address" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Label>Telephone Number</Form.Label>
                                                <Form.Control placeholder="User Phone Number" />
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Save Chyanges
                                            </Button>
                                        </Form>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        <h3>Reset Password</h3>
                                        <Form>
                                            <Form.Group controlId="formBasicPassword2">
                                                <Form.Label>Current Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword3">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Save Chyanges
                                            </Button>
                                        </Form>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="tabdelete">
                                        <h3>Delete The Account</h3>
                                        <p>Are you sure you want to delete this account from Govimithuro Community ??</p>
                                        <p>After you delete your account it will permanetly delete and can not be recovered.</p>
                                        <Button variant="danger" type="submit">
                                            Delete Account
                                        </Button>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }

}

export default Setting