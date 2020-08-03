import React from 'react'
import Project3 from "../images/Proj3/index"
import WeatherApp from "../images/Weather/index"
import Fitness from "../images/Fitness/index"
import Photography from "../images/Photography/index"
import { Container, Row, Col} from "react-bootstrap"



function Projects() {
    return (
        <>
            <Container >
                <br />
                <Row>
                    <Photography />
<Col xs={12} md={5} lg={5} >
                <br />
                <p style={{ wordWrap: ' break-word', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    For this project we wanted to create a way for users to find cheap flights, read postings from
                    other members on how they liked the place and to find out about how much they spent. You can also log your own trips here. This was built
 using the MERN stack </p>
                <p> <a href='https://github.com/MasonBurke/cheap-travel'> The Code </a>||
  <a href="https://desolate-citadel-71436.herokuapp.com/"> The Site </a> </p><hr />
</Col>

                </Row>
                <Row>

                    <WeatherApp />
                <Col xs={12} md={5} lg={5} >

                <br />
                <p style={{ wordWrap: ' break-word', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    This project used a weather API to pull weather updates from any area you search. Technologies used include
HTML, CSS, Javascript, and local storage. </p>
                <p> <a href='https://github.com/MasonBurke/weather-app'> The Code </a>||
<a href="https://masonburke.github.io/weather-app/"> The Site </a> </p>

                <hr />
                </Col>
                </Row>
                <Row>
                    <Project3 />
<Col xs={12} md={5} lg={5} >
                <br />
                <p style={{ wordWrap: ' break-word', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    For this project we wanted to create a way for users to find cheap flights, read postings from
                    other members on how they liked the place and to find out about how much they spent. You can also log your own trips here. This was built
 using the MERN stack </p>
                <p> <a href='https://github.com/MasonBurke/cheap-travel'> The Code </a>||
  <a href="https://desolate-citadel-71436.herokuapp.com/"> The Site </a> </p><hr />
</Col>

                </Row>
                <Row>

                    <Fitness />
                <Col xs={12} md={5} lg={5} >

                <br />
                <p style={{ wordWrap: ' break-word', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    Track your fitness here with the Fitness Tracker App. Technologies used include: HTML, CSS and Javascript
 </p>
                <p> <a href='https://github.com/MasonBurke/fitness-tracker'> The Code </a>||
  <a href="https://pure-woodland-71734.herokuapp.com/"> The Site </a> </p>


                    </Col>
                </Row>
            </Container>


            <br />
        </>
    )
}

export default Projects


//create clickable picture to link to site. add more projects. make desktop responsive.
//icons for code and site instead of text