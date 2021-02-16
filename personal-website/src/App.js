import React from 'react'
import SplashScreen from './Components/SplashScreen'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { animateScroll } from "react-scroll";
import Button from 'react-bootstrap/Button'
import './index.css'

var height = window.innerHeight;

function scrollToHome() {
    animateScroll.scrollTo(0);
}

function scrollToAbout() {
    animateScroll.scrollTo(height);
}

function scrollToProjects() {
    animateScroll.scrollTo(2*height);
}

function scrollToContact() {
    animateScroll.scrollTo(3*height);
}

function App() {
    return (
        <div>
                <Container>
                    <Navbar bg="light" variant="light" fixed="top" style={{height: "4%"}}>
                        <Navbar.Brand style={{fontSize: "125%"}}>Kenneth Rose</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link onClick={scrollToHome}>Home</Nav.Link>
                            <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
                            <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
                            <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
                        </Nav>
                        <Button variant="light" href="Kenneth Rose Resume.pdf" target="_blank">Resume</Button>
                    </Navbar>
                </Container>
                <SplashScreen id="splashscreen" />
                <About id="about" />
                <Projects id="projects" />
                <Contact id="contact" />
        </div>
    )
}

export default App
