import React from 'react'
import SplashScreen from './Components/SplashScreen'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Navbar style={{backgroundColor: "#212121"}}>
                <Navbar.Brand href="/home" style={{color: "white"}}>Kenneth Rose</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/about" style={{color: "white"}}>About</Nav.Link>
                <Nav.Link href="/projects" style={{color: "white"}}>Projects</Nav.Link>
                <Nav.Link href="/contact" style={{color: "white"}}>Contact</Nav.Link>
                </Nav>
            </Navbar>
            <SplashScreen />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
