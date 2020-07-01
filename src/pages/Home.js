import React from 'react'
import ProfilePhoto from "../images/Headshot/index"


function Home() {
    return (
        <>
            <ProfilePhoto />
            <h3 style={{ color: 'black', fontFamily: 'Open Sans', margin: 5 }}>Full Stack Web Development</h3>
<hr/>
            <p style={{ margin: 25 }}>
                Graduated from the University of Denver's Full Stack Web Development program, a fast
                paced course that specialized in programming languages such as HTML, CSS, Javascript, Node, Express, MongoDb, Mongoose, MySql and React!
</p>
            <p>
                Currently in a position of social media management in which I use front
                end development to craft a weekly promotional newsletter.
</p>
            <p>
                 I specialize in creating a pleasant UI/UX design.
</p>
<br/>
<br/>

        </>
    )
}

export default Home