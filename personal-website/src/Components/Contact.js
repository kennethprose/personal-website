import React from 'react'
import { Row, Col } from 'react-bootstrap';
import profile from '../images/Profile_Pic.jpg'
import { Instagram, Linkedin, GitHub, Loader } from 'react-feather';
import Button from 'react-bootstrap/Button'

function Contact() {
    return (
        <div className="Panel" style={{height: "100vh", backgroundColor: "#111111"}}>
            <Row className="no-gutters" style={{height: "25%"}}>
                <Col sm={12}>
                    <h1 className="text" style={{fontSize: "45px", marginTop: "6%"}}>Get in touch!</h1>
                </Col>
            </Row>
            <Row className="no-gutters" style={{height: "75%"}}>
                <Col sm={1} style={{ height: "100%" }} />
                <Col sm={5} style={{ height: "100%" }}>
                    <img id="profile2" src={profile} alt="An incredibly handsome man" />
                    <hr id="line" />
                    <h2 className="text">Kenneth P. Rose</h2>
                    <br></br>
                    <h4 className="text"><a id="email" href="mailto:rosekenny12@gmail.com" target="_blank" rel="noopener noreferrer">rosekenny12@gmail.com</a></h4>
                    <h4 className="text">516-359-1840</h4>
                    <h4 className="text">Long Island, NY</h4>
                    <br></br>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outline-light" href="https://www.instagram.com/kenneth.p.rose/" target="_blank" className="social-button"><Instagram></Instagram></Button>
                        <Button variant="outline-light" href="https://www.linkedin.com/in/kennethpatrickrose/" target="_blank" className="social-button"><Linkedin></Linkedin></Button>
                        <Button variant="outline-light" href="https://github.com/kennethprose" target="_blank" className="social-button"><GitHub></GitHub></Button>
                    </Row>
                </Col>
                <Col sm={5} style={{ height: "100%" }}>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Loader color="white" size={75} style={{ marginTop: "15%" }}></Loader>
                    </Row>
                    <br></br>
                    <h4 className="text">Work In Progress!</h4>
                </Col>
                <Col sm={1} style={{ height: "100%" }} />
            </Row>
        </div>
    )
}

export default Contact
