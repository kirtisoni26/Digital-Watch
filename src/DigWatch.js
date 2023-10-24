import React, { useState } from "react";
import './DigWatch.css';
const timee = new Date().toLocaleTimeString();
const DigWatch = () => {
const[state, setState] = useState(timee);

setInterval(() => {
 const timee = new Date().toLocaleTimeString();
 setState(timee);
}, 1000);
   
return <>      
 <div id="stylee">
 <h1>  {state} </h1>

 </div>
 
    </>
}


export default DigWatch;