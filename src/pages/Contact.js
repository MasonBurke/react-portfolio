import React from 'react'


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
    },
    svg:{
        margin: '2px',
    },
    svg2:{
        marginBottom: 121
    },
    icon: {
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

<p style={styles.p2}>GitHub</p>
<a href="https://www.github.com/masonburke" style={styles.icon}>

<svg style={styles.svg} width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
</svg><br/><br/>
</a>

<p style={styles.p2}> 
LinkedIn
</p>
<a href="https://www.linkedin.com/in/masonburke" style={styles.icon}>

<svg style={styles.svg, styles.svg2} width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
  <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
</svg>
</a>



</>
    )
}

export default Contact