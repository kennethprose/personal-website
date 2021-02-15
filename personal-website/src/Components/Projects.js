import React from 'react'
import icons from '../Triple_Black.png'
import personal_website from '../Personal-Website.png'
import { Row } from 'react-bootstrap';
import { GitHub } from 'react-feather';
import Button from 'react-bootstrap/Button'

function Projects() {
    return (
        <div className="Panel" style={{height: "100vh"}}>
            <Row className="no-gutters" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", height: "100%" }}>
                <div className="card">
                    <img className="card_pic" src={personal_website} alt="A preview of the propject"></img>
                    <h2 style={{ textAlign: "center", lineHeight: "125%", marginTop: "5%" }}><u>This Website!</u></h2>
                    <h4 style={{ textAlign: "center", lineHeight: "125%", marginTop: "5%", width: "90%", alignSelf: "center", color: "DimGrey" }}>Learn more about how this website was built and see how it was developed over time. Feedback on the website would be greatly appreciated and can be added as a new discussion.</h4>
                    <Button variant="outline-dark" href="https://github.com/kennethprose" target="_blank" className="project_github" style={{ marginTop: "5%" }}><GitHub></GitHub></Button>
                </div>
                <div className="card">
                    
                </div>
            </Row>
        </div>
    )
}

export default Projects
