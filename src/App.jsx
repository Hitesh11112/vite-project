import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([
    { title: "title 1", description: "description 1" },
    { title: "title 2", description: "description 2" },
    { title: "title 3", description: "description 3" }
  ]);
  const addtodo = () => {
    setTodo([...todo, {
      title: "title 4",
      description: "description 4"
    }]);
  };
  
  return (
    <>
      <Counter />
      <button onClick={addtodo}>Add to do</button>
      {todo.map((item, index) => <Header key={index} title={item.title} description={item.description} />)}
    </>
  )
}

const Header = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </>
  );
};


const Counter = () => {
  const [count, setCount] = useState(0);
  const Increment = () => { if (count >= 20) return; setCount(count + 1); };
  const Decrement = () => { if (count <= 0) return; setCount(count - 1); };

  return (
    <>
      <button onClick={Increment}>Increment</button>
      <p>Count is {count}</p>
      <button onClick={Decrement}>Decrement</button>
      <br /><br />
    </>
  );
};


export default App