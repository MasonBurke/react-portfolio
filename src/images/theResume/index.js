import React from 'react'
import aResume from "./aResume.png"


const styles =  {
    img:{
        height: "120%",
        width: '70%',
        margin: 'auto'
    }
    };

function _myResume() {
    return(
        <img style={styles.img} alt="resume" src={aResume}/>
    )
}

export default _myResume