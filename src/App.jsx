import { useState, useEffect } from 'react'
import Counter from '../components/Counter';
import Header from '../components/Header';

function App() {
  const [todo, setTodo] = useState([]);
  
  useEffect(() => {
    setInterval(() =>{
      fetch('http://localhost:3000/data')
        .then(async (res) => {
          const json = await res.json();
          setTodo(json);
        });
    },3000);
  }, []); 

  return (
    <>
      <Counter/>
      {todo.map((item, index) => <Header key={index} title={item.title} description={item.description} />)}
    </>
  )
}

export default App