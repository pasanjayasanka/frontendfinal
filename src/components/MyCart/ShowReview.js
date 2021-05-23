import React,{Component} from "react";
import {Form,Button} from "react-bootstrap";

class ShowReview extends Component{

    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data:{
            "email": this.props.location.state.email,
            "product": this.props.location.state.product
        },
        errors:{},
    });

    render() {
        const {data,errors} = this.state;
        return(
            <div>
                
            </div>
        )
    }

}

export default ShowReview;