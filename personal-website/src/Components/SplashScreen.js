import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Hike from '../photos/hike.jpg'
import Plane from '../photos/plane.jpg'

function SplashScreen() {  
    return (
        <div className="Panel" style={{height: "100vh"}}>
            <Carousel controls={false} keyboard={false} pause={false} style={{height: "100vh", position: "absolute"}}>
                <Carousel.Item style={{height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Hike}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{height: "100vh"}}>
                    <img
                        className="d-block w-100"
                        src={Plane}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SplashScreen
