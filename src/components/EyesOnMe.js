// Code EyesOnMe Component Here
import React from "react";
 
function EyesOnMe(){
    function Focus(){
        console.log('Good!')
    }
    function Blur(){
        console.log('Hey! Eyes on me!')

    }
    return(

    <button onFocus={Focus} onBlur={Blur}>Eyes on me </button>
    )
}
export default EyesOnMe