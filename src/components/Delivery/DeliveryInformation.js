import React from 'react';
import { Button, Card} from 'react-bootstrap';

import axios from 'axios';
import {CardBody, CardText, CardTitle, Form, FormFeedback, FormGroup, Input} from "reactstrap";


const apiUrl = 'https://localhost:44374/api/DeliveryInfo/';

class DeliveryInformation extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            error:null,
            deliveries:[],
            dispute:{
                notReceived:'',
                disputeMessage:''
            },
            response: {}
        }
    }

    componentDidMount(){
        //////////////////////////////////////////////////////////////////////////////////////////
        localStorage.setItem("ClickedItem",2); //<============================== to check only
/////////////////////////////////////////////////////////////////////////////////////////////////////
        axios.get(apiUrl ).then(response => response.data).then(
            (result)=>{

                this.setState({
                    deliveries:result,
                })

                console.log(result);
            },
            (error)=>{
                this.setState({error});
            }
        )
    }


    // DeleteDeliveryInfo(deliveryID) {
    //     const { deliveries } = this.state;
    //     axios.delete(apiUrl   + deliveryID).then(result=>{
    //         alert('Delivery Data deleted successfully!!!');
    //         this.setState({
    //             response:result,
    //             deliveries:deliveries.filter(delivery=>delivery.deliveryID !== deliveryID)
    //         });
    //     });
    // }

    handleChange = (e) => {
        this.setState({
            dispute: {
                ...this.state.dispute,
                [e.target.name]: e.target.value
            }
        });
    }



    submitDispute(delivery) {

        const data = {
            deliveryId: delivery.deliveryId,
            orderId: delivery.orderId,
            boughtDate: delivery.boughtDate,
            productName: delivery.productName,
            quantity: delivery.quantity,
            farmerName: delivery.farmerName,
            farmerEmail: delivery.farmerEmail,
            farmerAddress: delivery.farmerAddress,
            farmerPhone: delivery.farmerPhone,
            customerName: delivery.customerName,
            customerEmail: delivery.customerEmail,
            customerPhone: delivery.customerPhone,
            customerAddress: delivery.customerAddress,
            accepted: delivery.accepted,
            transit: delivery.transit,
            delivered: delivery.delivered,
            expectedDelivery: delivery.expectedDelivery,
            notReceived: this.state.dispute.notReceived,
            disputeMessage:  this.state.dispute.disputeMessage
        }

        axios.put(apiUrl + delivery.deliveryId, data )
            .then(res=>{
                if(res.status === 204){
                    alert("dispute submitted successfully");
                }

            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        const{errors,error,deliveries}=this.state;
        const orderID = localStorage.getItem("ClickedItem");

        if(error){

            return(
                <div className="center"><h4>Error : {error.message}!!!</h4></div>
            )
        }
        else
        {
            // const delivery = deliveries.filter(e => e.orderId === 2)
            // console.log("filtered data");
            // console.log(delivery);
            return(
                <div className="container">
                <Card style={{width:'30rem'}}>
                    {deliveries.filter((delivery)=> (delivery.orderId === parseInt(orderID))).map(delivery => (
                        <CardBody key = {delivery.id} >

                            <CardTitle> Govimithuro Delivery</CardTitle>
                            <CardText >
                                Delivery Id : {delivery.deliveryId}
                            </CardText>
                            <CardText >
                                Order Id : {delivery.orderId}
                            </CardText>
                            <CardText >
                                Bought Date : {delivery.boughtDate}
                            </CardText>
                            <CardText >
                                Estimated Delivery : {delivery.expectedDelivery}
                            </CardText>
                            <CardText >
                                Accepted by Courier : {delivery.accepted}
                            </CardText>
                            <CardText >
                                Transit : {delivery.transit}
                            </CardText>
                            <CardText >
                                Delivered : {delivery.delivered}
                            </CardText>
                            <CardText>
                                <b> Wait for estimated time before submit dispute !</b> <br/>
                                Not Received :
                                <Input Value={delivery.notReceived} name="notReceived" onChange={this.handleChange}/>
                            </CardText>
                            <CardText>
                                Dispute Message :
                                <Input   Value={delivery.disputeMessage}  name="disputeMessage" onChange={this.handleChange} />
                            </CardText>
                        <Button variant="primary"> Go back </Button>
                            <Button variant="primary" onClick={()=> this.submitDispute(delivery)}> Submit dispute </Button>

                        </CardBody>
                    ))}

                </Card>
                </div>
            )
        }
    }


}



export default DeliveryInformation