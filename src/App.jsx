import { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from '../components/Counter';
import Header from '../components/Header';
import Wrapper from '../wrapperClass/Wrapper';

function App() {
  const [todo, setTodo] = useState([]);

  // use of the useEffect to get the req to the backend and then fetching the data and rendering them in the frontend
  useEffect(() => {
    axios.get('http://localhost:3000/data/7')
      .then(async (res) => {
        setTodo([res.data]);
      })
      .catch((err) => {
        console.log("Something went wrong " , err);
      });
  }, []);

  return (
    <>
      {/* <Counter /> */}
      <div style={{ display: "flex", flexWrap: "wrap", }}>
        <Wrapper display="flex" justifyContent="center" width="100%" height="100px" backgroundColor="black" color="white" align>
          Todo List
        </Wrapper>
        <Wrapper width="49%" height="250px">
          <Counter />
        </Wrapper>
        <Wrapper width="48%" height="80px">
          This is one with the
        </Wrapper>
      </div>
      {todo.map((item) => <Header title={item.title} description={item.description} />)}
    </>
  )
}

export default App