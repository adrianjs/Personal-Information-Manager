import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <div className="lander">
                    <Row>
                        <Col xs={6} md={4}>
                            Kalender her!
                        </Col>
                        <Col xs={6} md={4}>
                            Notater her?
                        </Col>
                        <Col xs={6} md={4}>
                            ToDo-list?
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}