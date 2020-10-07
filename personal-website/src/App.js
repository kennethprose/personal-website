import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import SplashScreen from './Components/SplashScreen'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

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
