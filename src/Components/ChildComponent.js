import React from 'react'

  function ChildComponent ({user})  {
  const  {name ,age ,city ,email} = user;//Object destructuring 
  return (
    <div> This is ChildComponent
        <h1>Hi From Child Component </h1>
        <h3>Your Name is: {name} </h3>
        <h3>Your Age is: {age}</h3>
        <h3>Your city is:  {city}</h3>
        <h3>Your are  Email is : {email}</h3>

    </div>
  )
}

export default ChildComponent