import React from 'react'
import icons from '../images/Triple_Black.png'
import personal_website from '../images/Personal-Website.png'
import ToDo_website from '../images/ToDo-Website.png'
import Set_Cover from '../images/Set_Cover.png'
import { Row } from 'react-bootstrap';
import { GitHub } from 'react-feather';
import Button from 'react-bootstrap/Button'

function Projects() {
    return (
        <div className="Panel" style={{height: "100vh"}}>
            <Row className="no-gutters" style={{ backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", height: "15%" }}>
                <h1 className="text" style={{ alignSelf: "end", marginLeft: "50%", transform: "translate(-50%, 0%)" }}><u>My Projects</u></h1>
            </Row>
            <Row className="no-gutters" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", height: "75%" }}>
                <div className="card">
                    <img className="card_pic" src={personal_website} alt="A preview of the project"></img>
                    <h2 className="card_name"><u>This Website!</u></h2>
                    <h4 className="card_desc">Learn more about how this website was built and see how it was developed over time. Feedback on the website would be greatly appreciated and can be added as a new discussion.</h4>
                    <Button variant="outline-dark" href="https://github.com/kennethprose/personal-website" target="_blank" className="project_github" style={{ marginTop: "5%" }}><GitHub></GitHub></Button>
                </div>
                <div className="card">
                    <img className="card_pic" src={ToDo_website} alt="A preview of the project"></img>
                    <h2 className="card_name"><u>Todo Website</u></h2>
                    <h4 className="card_desc">A simple website where you can manage multiple todo lists. Functionality includes, creating and deleting lists, marking tasks as completed, and reordering tasks.</h4>
                    <Button variant="outline-dark" href="https://github.com/kennethprose/todo_hw2" target="_blank" className="project_github" style={{ marginTop: "5%" }}><GitHub></GitHub></Button>
                </div>
                <div className="card">
                    <img className="card_pic" src={Set_Cover} alt="A preview of the project"></img>
                    <h2 className="card_name"><u>Set Cover Algorithm</u></h2>
                    <h4 className="card_desc">Code that will calculate the <a href="https://en.wikipedia.org/wiki/Set_cover_problem" target="_blank" rel="noopener noreferrer" style={{ color: "mediumpurple" }}>set cover</a> of a set. This NP-complete problem is solved efficiently by backtracking and pruning the data.</h4>
                    <Button variant="outline-dark" href="https://github.com/kennethprose/Set_Cover" target="_blank" className="project_github" style={{ marginTop: "5%" }}><GitHub></GitHub></Button>
                </div>
            </Row>
            <Row className="no-gutters" style={{ backgroundImage: 'url('+icons+')', backgroundAttachment: "fixed", height: "10%" }}>
                <Button variant="light" href="https://github.com/kennethprose" target="_blank" style={{ fontSize: "25px", borderRadius: "10px", alignSelf: "start", marginLeft: "50%", marginTop: "1%", transform: "translate(-50%, -50%)" }}>Check out the rest of my GitHub!</Button>
            </Row>
            
        </div>
    )
}

export default Projects
