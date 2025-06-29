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
      <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={Increment}>Increment</button>
      <div className="card">
        <p>Count is {count}</p>
      </div>
      <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App