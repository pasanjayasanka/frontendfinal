import React, {Component} from 'react'
import './css/receipt.css'


class Receipt extends React.Component{
    
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data:{
            "billingId": this.props.location.state.billingid,
            "cardName": this.props.location.state.cardname,
            "cardNo":this.props.location.state.cardno,
            "expDate":this.props.location.state.expdate,
            "billDate":this.props.location.state.billdate,



            //"productID": this.props.location.state.cartid,
            // "productName":this.props.location.state.productname,
//"numOfProducts":this.props.location.state.quantity,
           // "totalPrice":this.props.location.state.total

        },
        
        errors:{},
        id:this.props.location.state.billingid
    });


    
    render(){
        const{data,errors}=this.state;

        
           
            return(
                
                <div className="container">
                    <div className="Rec-box">
                    <h4 className="center">Receipt of Payment</h4>
                        <div className="mid">
                            <div className="info">
                                <p>
                                   Card Holder's name &ensp;:&ensp;{data.cardName}                                   
                                </p>
                                <p>                                   
                                   Card Number&emsp;&emsp;&emsp;&ensp;:&ensp;{data.cardNo}                               
                                </p>
                                <p>
                                   Bill Date&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:&ensp;{data.billDate}
                                </p>
                            </div>
                        </div>

                        <div id="bot">
                            <div id="table">
                                <table>
                                    <tr className="tabletitle">
                                        <td className="item"> <h6>Item</h6> </td>
                                        <td className="price"><h6>Price(Rs)</h6></td>
                                    </tr>

                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext">Carrot</p>
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext">500</p>
                                        </td>
                                    </tr>

                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext">Milk</p>
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext">300</p>
                                        </td>
                                    </tr>

                                    <tr className="service">
                                        <td className="tableitem">
                                            <p className="itemtext"><strong>Total</strong></p>
                                        </td>
                                        <td className="tableitem">
                                            <p className="itemtext"><strong>800</strong></p>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <div>
                                <p><strong>Thank you for your business!</strong>Payment is succeeded. A receipt will be sent to your email.</p>
                            </div>
                        </div>
                 
            
                  
                </div>
                </div>
            )
        
    }

}



export default Receipt
