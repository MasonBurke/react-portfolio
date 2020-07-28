import React from 'react'
import Project3 from "../images/Proj3/index"
import WeatherApp from "../images/Weather/index"
import Fitness from "../images/Fitness/index"
import { Container, Row} from "react-bootstrap"



function Projects() {
    return(
<>
<Container>
<br/>
<Row>
<Project3  /> 
</Row>
<br/>

<p style={{wordWrap:' break-word' ,flex:1, justifyContent: 'center', alignItems: 'center'}}> 
For this project we wanted to create a way for users to find cheap flights, read postings from
 other members on how they liked the place and to find out about how much they spent. You can also log your own trips here.  </p>
 <p> <a href='https://github.com/MasonBurke/cheap-travel'> The Code </a>||
  <a href="https://desolate-citadel-71436.herokuapp.com/"> The Site </a> </p><hr/>

<Row>
<WeatherApp />
</Row>

<br/>
<p style={{wordWrap:' break-word' ,flex:1, justifyContent: 'center', alignItems: 'center'}}> 
This project used a weather API to pull weather updates from any area you search </p>
<p> <a href='https://github.com/MasonBurke/weather-app'> The Code </a>||
<a href="https://masonburke.github.io/weather-app/"> The Site </a> </p>

<hr/>
<Row>
    <Fitness/>
</Row>
<br/>
<p style={{wordWrap:' break-word' ,flex:1, justifyContent: 'center', alignItems: 'center'}}> 
This project used a weather API to pull weather updates from any area you search </p>
 <p> <a href='https://github.com/MasonBurke/fitness-tracker'> The Code </a>||
  <a href="https://pure-woodland-71734.herokuapp.com/"> The Site </a> </p>


</Container>


<br/>
</>
    )
}

export default Projects