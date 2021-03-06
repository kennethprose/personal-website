import React from 'react'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-rotating-text'
import icons from '../images/Triple_Black.png'
var ReactRotatingText = require('react-rotating-text');

function SplashScreen() {  
    return (
        <div className="Panel" style={{height: "100vh"}}>
            <Row className="no-gutters" style={{backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", backgroundSize: "cover", height: "100%"}}>
                <Col sm={2} />
                <Col sm={8}>
                    <h1 style={{color: "white", fontSize: "150px", paddingTop: "20%", paddingLeft: "5%"}}>Hello!</h1>
                    <h2 style={{color: "white", fontSize: "45px", paddingLeft: "5%"}}>I guess you're here to learn about my <ReactRotatingText items={['education', 'past projects', 'skills', 'contact info' ]} /></h2> 
                </Col>
                <Col sm={2} />
            </Row>
        </div>
    )
}

export default SplashScreen
