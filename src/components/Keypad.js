// Code Keypad Component Here

import React from 'react';


function Keypad (){
    function Button(event){
        console.log( "Entering password...")   
     }
    return (
        <div>
           <input  type="password" onChange={Button}/>
        </div>
    )
}

export default Keypad