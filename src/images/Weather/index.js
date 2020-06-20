import React from "react"
import Weather from "./Weather.png"

const styles =  {
    img:{
        height: 250,
        width: 400,
        margin: 'auto'
    }
    };
    
    function WeatherApp() {
        return(
    
    <img style={styles.img} src={Weather}/>
    
        )
    }
    
    export default WeatherApp