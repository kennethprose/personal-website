import React from 'react'
import { Row, Col } from 'react-bootstrap';
import profile from '../Profile_Pic.jpg'

function About() {
    return (
        <div className="Panel" style={{height: "100vh", backgroundColor: "#111111"}}>
            <Row className="no-gutters" style={{height: "100%"}}>
                <Col sm={1} />
                <Col sm={3}>
                    <img id="profile" src={profile} alt="An incredibly handsome man" />
                </Col>
                <Col sm={7}>
                    <h1 className="text" style={{paddingTop: "20%"}}>A little about me</h1>
                    <hr id="line" />
                    <h4 className="text" style={{paddingLeft: "5%", paddingRight: "5%"}}>Kenneth is a driven and solution-oriented Computer Scientist and Mathematician with a rapidly expanding repertoire of professional skills. Kenneth has developed a proficiency in numerous programming languages including Java, JavaScript, Python and C. Additionally, Kenneth has used his experience as an IT Technician to develop strong communication, teamwork, and customer service skills. In his free time, Kenneth volunteers as an Assistant Scout Master for Troop 261, his local Boy Scout troop where he achieved the rank of Eagle Scout. With a fast-approaching graduation from Stony Brook University with a Bachelors in Computer Science and Applied Mathematics, Kenneth is excited and prepared to enter the industry and get hands-on experience in programming, information security, and networking.</h4>
                    <br />
                    <br />
                    <h1 className="text">Resume</h1>
                    <hr id="line" />
                    <a type="button" class="btn btn-outline-light resume" href="Kenneth Rose Resume.pdf">View/Download My Resume</a>
                </Col>
                <Col sm={1} />
            </Row>
        </div>
    )
}

export default About
