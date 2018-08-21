import Input from 'arui-feather/input';
import Radio from 'arui-feather/radio';
import RadioGroup from 'arui-feather/radio-group';
import { changePay } from '../../AC';
import {connect} from 'react-redux';
import React, { Component } from 'react'



class Pay extends Component {
    constructor() {
        super();
        this.state = {
            money: '',
            amount: '',
            error: true
        }
    }

    handleValueChange = (event) => {

        this.setState({
            amount: event,
        });

        this.props.changePay(Number.parseInt(event), Number.parseInt(event));

        if(Number.parseInt(event, 10) > 0) {
            this.setState({
                amount: event,
                error: false
            });
            this.props.changePay(Number.parseInt(event), Number.parseInt(event));

        } else {
            this.setState({
                error: true
            });
            this.props.changePay(Number.parseInt(event), Number.parseInt(event));
        }


    };

    render() {
        return (
            <div>
                <Input
                    value={this.state.amount}
                    error={ this.state.error ? 'Значение должно быть больше 0' : null }
                    onChange={this.handleValueChange}
                    size='l'
                    placeholder='Введите сумму'
                    rightAddons={
                        <RadioGroup type='button'>
                            {
                                    <Radio
                                        ref={(value => value)}
                                        size='s'
                                        type='button'
                                        text={ '₽' }
                                    />
                            }
                        </RadioGroup>
                    }
                    type='number'
                />
            </div>
        )
    }
}

export default connect(null, {changePay})(Pay);
