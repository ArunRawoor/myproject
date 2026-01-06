// import React from 'react'

// function EventHandlers() {
//     const  handleClick = (event) => {
//         console.log("The button is Clicked",event.type);
//          console.log("The button is Clicked",event.target);
//         console.log("The button is Clicked",event.clientX);
//         console.log("The button is Clicked",event.clientY);
//         alert('You Clicked the Button ')
//     }
//   return (
//     <div>EventHandlers
//         <button onClick={(handleClick)}>Click </button>
//     </div>
//   )
// }

// export default EventHandlers

// import React, { useState } from 'react'



// function EventHandlers() {
//   const [position , setPosition] =useState({x: 0, y: 0});

//   const handleMouseMove = (event) => {
//      setPosition({
//       x: event.clientX,
//       y: event.clientY,
//      });
//   };  

//   const MouseEntered = () => {
//     console.log("Mouse Entered area");
//   }
//     const MouseLeft = () => {
//     console.log("Mouse Left area");
//   }
//   return (
//     <div style={{height:'100px' , border: '1px solid red'}}
//     onTouchMove={handleMouseMove}
//      onMouseOver={MouseEntered}
//      onMouseLeave={MouseLeft}
//     >
//      Mouse position : {position.x} , {position.y}
//     </div>
//   );
// }

// export default EventHandlers



import { React, useState } from "react";
function EventHandlers() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  
  const handleMouseEnter = () => {
    console.log('Mouse entered area');
  };
  
  const handleMouseLeave = () => {
    console.log('Mouse left area');
  };
  
  return (
    <div
      style={{ height: '200px', border: '1px solid red' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Mouse position: {position.x}, {position.y}
    </div>
  );
}
export default EventHandlers;