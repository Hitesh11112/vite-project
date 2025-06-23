import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    if (count >= 20) return;
    setCount(count + 1);
  };
  const Decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={Increment}>Increment</button>
      <div className="card">
        <button>Count is {count}</button>
      </div>
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App