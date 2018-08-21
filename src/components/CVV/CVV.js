import CardInput from 'arui-feather/card-input';
import React, { Component } from 'react'
import {changeCVV} from "../../AC";
import {connect} from "react-redux";



class CVV extends Component {
    constructor() {
        super();
        this.state = {
            error: true,
            value: ''
        }
    }

    onUpdate = (value) => {
        if (value.length < 3) {
            this.setState({
                value,
                error: true
            });
            this.props.changeCVV(false, value);
        } else if (value.length === 3) {
            this.setState({
                error: false
            });
            this.props.changeCVV(true, value);
        } else if (value.length > 3) {
            this.setState({
                error: false,
                value: value.substring(0, value.length - 1)

        });
            return
        }
    };


    render() {
        return (
            <div className='row'>
                <CardInput
                    value={ this.state.value }
                    size='l'
                    placeholder='CVV'
                    error={ this.state.error ? 'СVV должно содержать цифры и состоять из 3х символов' : null }
                    onChange={ this.onUpdate }
                />
            </div>
        )
    }
}

export default connect(null, {changeCVV})(CVV);
