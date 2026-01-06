import React from 'react'
import ChildComponent from './ChildComponent'
function ParentComponent() {
    const user = {
        name:"Tony",
        age:35,
        city:"NYC",
        email:"tony@gmail.com"
    }
  return (
    <div>
    This is ParentComponent
     <ChildComponent user={user}/>
    </div>
  )
}

export default ParentComponent