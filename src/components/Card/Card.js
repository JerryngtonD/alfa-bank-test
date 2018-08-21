import CardInput from 'arui-feather/card-input';
import React, { Component } from 'react'
import {changeCardNumber} from "../../AC";
import {connect} from "react-redux";


class Card extends Component {
    constructor() {
        super();
        this.state = {
            cardNumber: '',
            error: true
        }
    }

    handleValueChange = (event) => {
        const cardNumber = event.replace(' ','');
        if (cardNumber.length <= 10) {
            this.setState({
                cardNumber,
                error: true
            });
            this.props.changeCardNumber(false, cardNumber);
        } else {
            this.setState({
                cardNumber,
                error: false
            });
            this.props.changeCardNumber(true, cardNumber);
        }
    };

    render() {
        return (
            <div className='row'>
                <CardInput
                    error={ this.state.error ? 'Длина номера карты должна содержать не менее 10 символов' : null }
                    onChange={this.handleValueChange}
                    size='l'
                    placeholder='Номер карты' />
            </div>
        )
    }
}

export default connect(null, {changeCardNumber})(Card);
