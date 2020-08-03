import React from "react"
import photography from "./photography.png"


const styles =  {
    img:{
        height: 250,
        width: 400,
        margin: 'auto'
    }
    };
    
    function Photography() {
        return(
  

    <img style={styles.img} src={photography}/>
    
    
        )
    }
    
    export default Photography