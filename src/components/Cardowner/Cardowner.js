import Input from 'arui-feather/input';
import React, { Component } from 'react'
import {changeCardOwner} from "../../AC";
import {connect} from "react-redux";



class Cardowner extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            value: 'Ivan Ivanov'
        }
    }

    onUpdateName = (value) => {
        if (value.match("[a-zA-Z]+") && value.length > 7) {
            this.setState({
                value,
                error: false
            });
            this.props.changeCardOwner(true, value)
        } else {
            this.setState({
                value,
                error: true
            });
            this.props.changeCardOwner(false, value)
        }
    };

    render() {
        return (
            <div className='row'>
                <div className='row'>
                    <Input
                        placeholder='Имя владельца'
                        error={ this.state.error ? 'Имя владельца карты должно состоять из латинских символов и иметь длину более 7 символов' : null }
                        defaultValue={this.state.value}
                        value={ this.state.value }
                        clear={ true }
                        view='line'
                        size='l'
                        onChange={ this.onUpdateName }
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, {changeCardOwner})(Cardowner);

