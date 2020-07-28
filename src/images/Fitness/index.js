import React from "react"
import Fitness from "./fitness.png"

const styles =  {
    img:{
        height: 250,
        width: 400,
        margin: 'auto'
    }
    };
    
    function fitnessTracker() {
        return(
    
    <img style={styles.img} src={Fitness}/>
    
        )
    }
    
    export default fitnessTracker