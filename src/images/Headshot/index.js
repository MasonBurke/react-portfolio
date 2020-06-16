import React from "react"
import Headshot from "./Headshot.jpg"

const styles =  {
    img:{
        height: 255,
        width: 255,
        marginTop: 2,
        borderStyle: 'groove'
    }
    };
    
    function ProfilePhoto() {
        return(
    
    <img style={styles.img} src={Headshot}/>
    
        )
    }
    
    export default ProfilePhoto