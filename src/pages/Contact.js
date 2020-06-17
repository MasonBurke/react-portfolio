import React from 'react'
// import styled from 'styled-components';

// const HoverText = styled.p`
// 	color: #000;
// 	:hover {
// 		color: #ed1212;
// 		cursor: pointer;
// 	}
// `

const styles = {
    p:{
        fontFamily:"Georgia-italic",
        marginTop: 15,
        fontSize: 45,
    },
    p2:{
        fontSize:25,
        fontFamily:'Heiti TC'
    },
    email:{
        color:'#876C48'
    },
    hr:{
        width:'75%'
    },
    phone:{
        color:'#876C48'
    }
}

function Contact() {
    return(
<><br/>
<p style={styles.p}>Let's Work Together!</p>
<p style={styles.p2}> Send me an email at
<br/> <a href="mailto:masonburke@rocketmail.com" style={styles.email}> MasonBurke@rocketmail.com </a> </p>

<hr style={styles.hr}/>
<br/>
<p style={styles.p2}> 
Give me a call at <br/>
<a href="tel:314-607-3102" style={styles.phone}>314-607-3102</a>
</p>

<hr style={styles.hr}/>
<br/>
<p style={styles.p2}> 
Based out of Boulder Colorado
</p>


</>
    )
}

export default Contact