import Button from 'arui-feather/button';
import React, { Component } from 'react'
import {connect} from "react-redux";


import './style.css';



class SendButton extends Component {
 constructor() {
     super();
     this.state = {
         data: 'Nothing was received from the server',
     };
 }
    onSendData = () => {
        fetch('http://localhost:8080/api/user_buy', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...this.props.userInfo})
        })
            .then((response) => {
                return response.json();
            })
            .then((data) =>  {
                this.setState({data})
            })
    };

    render() {
        return (
            <div className='column'>
                <Button
                    className='sendData'
                    view='extra'
                    disabled={this.props.disabled}
                    size='l'
                    onClick={this.onSendData}
                >

                    {`Оплатить`}
                </Button>
                <div className='serverAnswer'>
                    {JSON.stringify(this.state.data)}
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    let formFieldRights = [state.isValidPay, state.isValidCVV, state.isValidActionTime, state.isValidCardNumber, state.isValidCardOwner]
    let disabled = formFieldRights.some((formFieldIsRight) => {
        return formFieldIsRight !== true;
    });

    let userInfo = {
        pay: state.pay,
        actionTime: state.actionTime,
        cardNumber: state.cardNumber,
        cardOwner: state.cardOwner,
        cvv: state.cvv
    };

    return ({
        disabled,
        userInfo
    })
})(SendButton);
