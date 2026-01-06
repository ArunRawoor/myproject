import React,{useState} from 'react'

function PrviosCount() {
    const initialCount =0
const [count , setCount] = useState(initialCount);

// const reset =() =>{
//     setCount(initialCount)
// }
// const increment = () =>{
//       setCount(count + 1);
// }

// const decrement = () =>{
//       setCount(count - 1);
// }
const IncrementFive = () =>{
    for(let i = 0; i <5; i++)
    setCount(PrevCount =>  PrevCount + 1);
}
  return (
    <div>
       <h1>Count : {count}</h1>
       <button onClick={() => setCount(initialCount)}>Reset</button>
       <button onClick={() => setCount(PrevCount =>  PrevCount + 1)}>Increment</button>
       <button onClick={() => setCount(PrevCount =>  PrevCount - 1)}>Decrement</button>
       <button onClick={IncrementFive}>Increment 5</button>


    </div>
  )
}

export default PrviosCount