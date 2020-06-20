import React from 'react'
import Project3 from "../images/Proj3/index"
import WeatherApp from "../images/Weather/index"
import { Container, Row, Col } from "react-bootstrap"



function Projects() {
    return(
<>
<Container>
<Row> 
<Project3  /> <p style={{position: 'absolute', right: 0}}> sdfgsdfgsdfgsd </p>
</Row>
<hr/>

<Row>
<WeatherApp /> <Col><p style={{position: 'absolute', left: 15}}> heyasdfsdfgbdkjhfgbdskjfhgbdskfjhg </p></Col>
</Row>
</Container>



</>
    )
}

export default Projects