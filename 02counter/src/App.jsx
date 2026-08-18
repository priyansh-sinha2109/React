import React from 'react'
import { useState } from 'react'

const App = () => {

 const [counter , setCounter] = useState(15)

  
  const addValue = ()=>{
    if(counter >= 20){
      return counter
    }
    setCounter(counter + 1)
  }

  const removeValue = ()=>{
    if(counter <= 0) {
      return counter
    }
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </div>
  )
}

export default App
