import React from 'react'
import { Row, Col } from 'react-bootstrap';

function changeText(e) {
    var display = document.getElementById(e.target.id + "_2")
    switch(e.target.id) {
        case '214':
            display.innerText = "An extension of programming methodology to data storage and manipulation on complex data sets."
            break;
        case '310':
            display.innerText = "Overview of computer networks and the Internet."
            break;
        case '316':
            display.innerText = "Introduction to systematic design, development and testing of software systems."
            break;
        case '373':
            display.innerText = "Mathematical analysis of a variety of computer algorithms."
            break;
        default:
            break;
    }
}

function changeTextBack(e) {
    var display = document.getElementById(e.target.id + "_2")
    switch(e.target.id) {
        case '214':
            display.innerText = "Data Structures"
            break;
        case '310':
            display.innerText = "Computer Networks"
            break;
        case '316':
            display.innerText = "Fundamentals of Software Development"
            break;
        case '373':
            display.innerText = "Analysis of Algorithms"
            break;
        default:
            break;
    }
}

function Experience() {
    return (
        <div className="Panel" style={{height: "100vh", backgroundColor: "#111111"}}>
            <Row className="no-gutters" style={{height: "100%"}}>
                <Col sm={1} />
                <Col sm={5}>
                    <h1 style={{ color: "white", lineHeight: "125%", paddingTop: "15%", textAlign: "center" }}>Education</h1>
                    <hr style={{ width: "150px", border: "1px solid white" }} />
                    <br />
                    <h2 style={{ color: "white" }}>Stony Brook University</h2>
                    <h3 style={{ color: "silver" }}>Bachelor of Science: Computer Science, Applied Mathematics</h3>
                    <h3 style={{ color: "silver" }}>August 2017 - May 2021</h3>
                    <br />
                    <h3 style={{ color: "white", marginLeft: "15%" }}>Notable Coursework:</h3>
                    <div className="course" id="214" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="214_2">Data Structures</h3>
                    </div>
                    <div className="course" id="310" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="310_2">Computer Networks</h3>
                    </div>
                    <div className="course" id="316" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="316_2">Fundamentals of Software Development</h3>
                    </div>
                    <div className="course" id="373" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="373_2">Analysis of Algorithms</h3>
                    </div>
                </Col>
                <Col sm={5}>
                    <h1 style={{ color: "white", lineHeight: "125%", paddingTop: "15%", textAlign: "center" }}>Employment</h1>
                    <hr style={{ width: "150px", border: "1px solid white", alignSelf: "end" }} />
                    <br />
                    <h2 style={{ color: "white", marginLeft: "5%" }}>Lead IT Technician / Workbench Manager</h2>
                    <h3 style={{ color: "silver", marginLeft: "5%" }}>Stony Brook University Campus Residences</h3>
                    <h3 style={{ color: "silver", marginLeft: "5%" }}>September 2019 - Present</h3>
                    <br />
                    <ul style={{ color: "white", marginLeft: "10%" }}>
                        <li><h3>Assist staff and students via telephone, email, helpdesk tickets, in-person visits, and remote access.</h3></li>
                        <li><h3>Install, upgrade, troubleshoot and repair desktop computers, laptops, phones, IoT devices, etc.</h3></li>
                        <li><h3>Utilized KACE Endpoint Management to ensure all devices on the network were up to date and secure.</h3></li>
                        <li><h3>Document newly formed procedures and update existing documentation.</h3></li>
                        <li><h3>Excellent written and interpersonal communication skills.</h3></li>
                    </ul>
                </Col>
                <Col sm={1} />
            </Row>
        </div>
    )
}

export default Experience