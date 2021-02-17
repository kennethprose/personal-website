import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Line } from 'rc-progress';
import icons from '../images/Triple_Black.png';

function Skills() {
    return (
        <div className="Panel" style={{height: "100vh"}}>
            <Row className="no-gutters" style={{backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", height: "100%"}}>
                <Col sm={1} />
                <Col sm={5}>
                    <h1 className="text experience_title">Technical Skills</h1>
                    <br />
                    <div className="skill">
                        <h4 className="skill_name">React</h4>
                        <Line percent="75" strokeColor="#DA4453" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Java</h4>
                        <Line percent="90" strokeColor="#ED5565" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Python</h4>
                        <Line percent="80" strokeColor="#FC6E51" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">C</h4>
                        <Line percent="65" strokeColor="#FFCE54" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">SQL</h4>
                        <Line percent="60" strokeColor="#A0D468" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Git</h4>
                        <Line percent="90" strokeColor="#48CFAD" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                </Col>
                <Col sm={5}>
                    <h1 className="text experience_title">Soft Skills</h1>
                    <br />
                    <div className="skill">
                        <h4 className="skill_name">Communication</h4>
                        <Line percent="85" strokeColor="#D770AD" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Problem solving</h4>
                        <Line percent="85" strokeColor="#EC87C0" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Attention to detail</h4>
                        <Line percent="95" strokeColor="#AC92EC" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Leadership</h4>
                        <Line percent="90" strokeColor="#5D9CEC" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Collaboration</h4>
                        <Line percent="80" strokeColor="#4FC1E9" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                    <div className="skill">
                        <h4 className="skill_name">Friendliness</h4>
                        <Line percent="90" strokeColor="#37BC9B" trailColor="white" strokeWidth="3" trailWidth="1" />
                    </div>
                </Col>
                <Col sm={1} />
            </Row>
        </div>
    )
}

export default Skills