import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  
  const increaseValue = () =>{
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
  }

  const decreaseValue = () =>{
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
    setCounter((counter) => counter - 1)
  }

  return (
    <>
      <h1><center>React course</center></h1>
      <h2><center>Counter value {counter}</center></h2>
      <button onClick={increaseValue}>Increase value</button>{" "}
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
