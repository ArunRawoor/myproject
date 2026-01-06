import React, { useState } from 'react'

function FunctionComponentEx() {
    const [count , setCount] = useState(0);

const increment = () =>{
      setCount(count + 1);
}

const decrement = () =>{
      setCount(count - 1);
}
  return (
    <div>This is FunctionComponentEx
       <h1>Count : {count}</h1>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default FunctionComponentEx