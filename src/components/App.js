import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import Pay from './Pay/Pay';
import Card from './Card/Card';
import ActionTime from './ActionTime/ActionTime';
import Cardowner from './Cardowner/Cardowner';
import CVV from'./CVV/CVV';
import SendButton from "./SendButton/Button";

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


class App extends Component {
    static propTypes = {

    };

    isValid = (items) => {

    };

    render() {
        return (
            <Grid style={{ border: "1px solid black", padding: "50px" }} >
                <Row className="show-grid">
                    <Col className="col-item pay" xs={12} md={8}>
                        <Pay/>
                    </Col>
                    <Col className="col-item card" xs={6} md={4}>
                        <Card/>
                    </Col>
                    <Col className="col-item actionTime" xs={12} md={8}>
                        <ActionTime/>
                    </Col>
                    <Col className="col-item cardowner" xs={6} md={4}>
                        <Cardowner/>
                    </Col>
                    <Col className="col-item col-12 cvv">
                        <CVV />
                    </Col>
                    <Col className="col-item col-12 send-btn" xs={12} md={4}>
                        <SendButton/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default App
