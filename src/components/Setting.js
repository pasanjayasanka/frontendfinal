import React, {Component} from "react";
import {Tab,Tabs,Button,Nav,Row,Col,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Button.css';
import axios from 'axios';
import {Input} from "reactstrap";

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

        axios.get(customerUrl).then(response => response.data).then(
            (result)=>{
                this.setState({
                    users:result.filter((result)=> result.firstName.toLowerCase() === "nimal")
                });
                //console.log(result.customerID);
                console.log(this.state.users);
            },
            (error)=>{
                this.setState({error});
            }
        )
        console.log("yes");
        console.log(this.state.users);
        console.log("ok");

    }

    handleChange = (e) => {
        this.setState({
            users: {
                ...this.state.users,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    delete(customerID, e){
        console.log("delete");
        console.log(customerID);
        axios.delete(`https://localhost:44374/api/Customer/${customerID}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                //const users = this.state.carts.filter(item => item.customerID !== customerID);
                //this.setState({ carts });
            })
        //window.location.reload(false);

    }

    validate = () => {
        const { users } = this.state;
        let errors = {};

        if (users.firstName === '') errors.firstName = 'firstName can not be blank.';

        return errors;
    }

    handleSubmit = (e) => {
        console.log("submit work");
        e.preventDefault();
        const { users } = this.state;
        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            //console.log(data);
            //Call an api here
            //user.numOfProducts = parseInt(user.numOfProducts);
            //data.totalPrice = data.numOfProducts*this.price;
            axios.put(`${customerUrl}/${users.customerID}`, users)
                .then((data) => {
                    console.log(users);
                })
                .catch((error) => {
                    console.log(error);
                });
            //Resetting the form
            console.log('complete');
            console.log(users);
            console.log(this.price);
            console.log(this.props.location.state.cartid);

            //this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }

        //this.props.history.push('/Cart');

    }

    render() {

        const{error,users}=this.state;

        return(
            <div className="tab">
                <h4 className="title">Profile Settings</h4>
                <div>
                    <Form>
                        {users.map(user => (
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Role</Form.Label>
                                <Input value="Customer" name="fname" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Input value={user.firstName} name="lname" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridid">
                                <Form.Label>ID</Form.Label>
                                <Input value={user.customerID} name="id" />
                            </Form.Group>

                        </Form.Row>
                        ))}
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
                                        {users.map(user => (
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Group controlId="formBasicFName">
                                                <Form.Label>First Name</Form.Label>
                                                <Input value={user.firstName} name="genfname" onChange={this.handleChange}/>

                                            </Form.Group>

                                            <Form.Group controlId="formBasicLName">
                                                <Form.Label>Last Name</Form.Label>
                                                <Input value={user.lastName} name="genlname" onChange={this.handleChange}/>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicAddress">
                                                <Form.Label>Address</Form.Label>
                                                <Input value={user.address} name="genaddress" onChange={this.handleChange}/>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Label>Telephone Number</Form.Label>
                                                <Input value={user.phone} name="genphone" onChange={this.handleChange}/>
                                            </Form.Group>

                                            <Button variant="primary" type="submit">
                                                Save Changes
                                            </Button>
                                        </Form>
                                        ))}
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        <h3>Reset Password</h3>
                                        <Form>
                                            <Form.Group controlId="formBasicPassword2">
                                                <Form.Label>Current Password</Form.Label>
                                                <Input type="password" placeholder="Current Password"/>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword3">
                                                <Form.Label>New Password</Form.Label>
                                                <Input type="password" placeholder="New Password"/>
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
                                        {users.map(user => (
                                        <Button variant="danger" type="submit" onClick={(e) => this.delete(user.customerID, e)}>
                                            Delete Account
                                        </Button>
                                            ))}
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