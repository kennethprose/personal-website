import React from 'react'
import icons from '../Triple_Black.png'
import temp from '../temp.jpg'
import { Row } from 'react-bootstrap';
import { GitHub } from 'react-feather';
import Button from 'react-bootstrap/Button'

function Projects() {
    return (
        <div className="Panel" style={{height: "100vh"}}>
            <Row className="no-gutters" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", height: "100%" }}>
                <div className="card">
                    <img className="card_pic" src={temp} alt="A preview of the propject"></img>
                    <h2 style={{ textAlign: "center", lineHeight: "125%", marginTop: "5%" }}><u>Title</u></h2>
                    <h4 style={{ textAlign: "center", lineHeight: "125%", marginTop: "5%" }}>This is the description of the project that will provide a brief summary of the project.</h4>
                    <Button variant="outline-dark" href="https://github.com/kennethprose" target="_blank" className="project_github" style={{ marginTop: "5%" }}><GitHub></GitHub></Button>
                </div>
                <div className="card">
                    
                </div>
            </Row>
        </div>
    )
}

export default Projects
