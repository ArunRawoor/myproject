import React, { useState } from 'react'

function Form1() {
    const [userName , setuserName] = useState();
    const [password , setPassword] = useState();

    const handleChange = (event) => {
        setuserName(event.target.value);
        setPassword(event.target.value);

    };

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("the form submitted with UserName:",userName);
    console.log("the form submitted with Password:",password);

}
  return (
    <div>
        <form onSubmit={(handleSubmit)}>
             <h1>React Form</h1>
             <input 
              type='text'
              value={userName}
              onChange={(event) => 
                     setuserName(event.target.value)
              }
              placeholder='Please enter your userName'
              required
              />
              <br></br>
              <br></br>
              <input 
              type='password'
              value={password}
                  onChange={(event) => 
                     setPassword(event.target.value)
              }
              placeholder='Please enter your password'
              required
              />
              <br></br>
              <br></br>
              <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Form1