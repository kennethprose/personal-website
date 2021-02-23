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
        case '331':
            display.innerText = "Covers basic security topics such as cryptography, operating systems security, network security, and language-based security."
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
        case '331':
            display.innerText = "Computer Security Fundamentals"
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
                    <h1 className="experience_title">Education</h1>
                    <hr style={{ width: "150px", border: "1px solid white" }} />
                    <br />
                    <h2 style={{ color: "white", fontSize: "3.5vh" }}>Stony Brook University</h2>
                    <h3 style={{ color: "silver", fontSize: "2.9vh" }}>Bachelor of Science: Computer Science, Applied Mathematics</h3>
                    <h3 style={{ color: "silver", fontSize: "2.9vh" }}>August 2017 - May 2021</h3>
                    <br />
                    <h3 style={{ color: "white", marginLeft: "15%", fontSize: "2.8vh" }}>Notable Coursework:</h3>
                    <div className="course" id="214" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="214_2">Data Structures</h3>
                    </div>
                    <div className="course" id="310" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="310_2">Computer Networks</h3>
                    </div>
                    <div className="course" id="316" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="316_2">Fundamentals of Software Development</h3>
                    </div>
                    <div className="course" id="331" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="331_2">Computer Security Fundamentals</h3>
                    </div>
                    <div className="course" id="373" onMouseOver={changeText} onMouseOut={changeTextBack}>
                        <h3 className="course_title" id="373_2">Analysis of Algorithms</h3>
                    </div>
                </Col>
                <Col sm={5}>
                    <h1 className="experience_title">Employment</h1>
                    <hr style={{ width: "150px", border: "1px solid white" }} />
                    <br />
                    <h2 style={{ color: "white", marginLeft: "5%", fontSize: "3.5vh" }}>Lead IT Technician / Workbench Manager</h2>
                    <h3 style={{ color: "silver", marginLeft: "5%", fontSize: "2.9vh" }}>Stony Brook University Campus Residences</h3>
                    <h3 style={{ color: "silver", marginLeft: "5%", fontSize: "2.9vh" }}>September 2019 - Present</h3>
                    <br />
                    <ul style={{ color: "white", marginLeft: "10%" }}>
                        <li><h3 style={{ fontSize: "3vh" }}>Assist staff and students via telephone, email, helpdesk tickets, in-person visits, and remote access.</h3></li>
                        <li><h3 style={{ fontSize: "3vh" }}>Install, upgrade, troubleshoot and repair desktop computers, laptops, phones, IoT devices, etc.</h3></li>
                        <li><h3 style={{ fontSize: "3vh" }}>Managed team performance by training, motivating, and directing 20 employees.</h3></li>
                        <li><h3 style={{ fontSize: "3vh" }}>Document newly formed procedures and update existing documentation.</h3></li>
                        <li><h3 style={{ fontSize: "3vh" }}>Excellent written and interpersonal communication skills.</h3></li>
                    </ul>
                </Col>
                <Col sm={1} />
            </Row>
        </div>
    )
}

export default Experience