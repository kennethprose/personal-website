import React from 'react'
import SplashScreen from './Components/SplashScreen'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <SplashScreen />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default App
