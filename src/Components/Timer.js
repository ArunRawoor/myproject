import React, { useEffect, useState } from 'react'

function Timer() {
    const [secends ,setSecends] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecends(prev => prev + 1);
         } ,1000);
        return () => clearInterval(interval);
    },[]);
  return (      
    <div>
        <h2>
            timer : {secends}
       </h2>
       
       </div>
  )
}

export default Timer