import React from "react"
import Weather from "./Weather.png"

const styles =  {
    img:{
        height: 255,
        width: 415,
        float:'right',
        position: 'absolute', right: 15
    }
    };
    
    function WeatherApp() {
        return(
    
    <img style={styles.img} src={Weather}/>
    
        )
    }
    
    export default WeatherApp