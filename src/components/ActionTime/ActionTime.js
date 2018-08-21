import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './style.css';
import {changeActionTime} from "../../AC";

import {connect} from "react-redux";



class ActionTime extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            startDate: null,
            activeClass: 'notSelected'
        };
    }

    handleChange = (date) => {
        if(date !== null) {
            this.setState({
                startDate: date,
                activeClass: 'selected'
            });
            this.props.changeActionTime(true, moment(date).toDate());
        } else {
            this.setState({
                startDate: null,
                activeClass: 'notSelected'
            });
            this.props.changeActionTime(false, moment(date).toDate());
        }
    };

    render() {
        return <DatePicker className={this.state.activeClass}
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText="Срок карты"
        />;
    }
}

export default connect(null, {changeActionTime})(ActionTime);
