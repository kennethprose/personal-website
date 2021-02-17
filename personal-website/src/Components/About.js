import React from 'react'
import { Row, Col } from 'react-bootstrap';
import profile from '../images/Profile_Pic.jpg'

function About() {
    return (
        <div className="Panel" style={{height: "100vh", backgroundColor: "#111111"}}>
            <Row className="no-gutters" style={{height: "100%"}}>
                <Col sm={1} />
                <Col sm={3}>
                    <img id="profile" src={profile} alt="An incredibly handsome man" />
                </Col>
                <Col sm={7}>
                    <h1 className="text" style={{paddingTop: "15%"}}>A little about me</h1>
                    <hr id="line" />
                    <h4 className="text" style={{paddingLeft: "5%", paddingRight: "5%", fontSize: "27px", lineHeight: "150%"}}>I am a driven and solution-oriented Computer Scientist and Mathematician with a rapidly expanding repertoire of professional skills. I have developed a proficiency in numerous programming languages including Java, JavaScript, Python and C. Additionally, I have used my experience as an Lead IT Technician to develop strong communication, teamwork, and customer service skills. In my free time, I volunteer as an Assistant Scout Master for Troop 261, my local Boy Scout troop, where I achieved the rank of Eagle Scout. With a fast-approaching graduation from Stony Brook University, I am excited and prepared to enter the industry and get hands-on experience in programming, information security, and networking.</h4>
                    <br />
                    <br />
                    <h1 className="text">Resume</h1>
                    <hr id="line" />
                    <a type="button" class="btn btn-outline-light resume" href="Kenneth_Rose_Resume.pdf" target="_blank">View/Download My Resume</a>
                </Col>
                <Col sm={1} />
            </Row>
        </div>
    )
}

export default About
