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

export default App