import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Wrapper from '../wrapperClass/Wrapper';


function App() {
  const [todo, setTodo] = useState([]);
  const [start,setStart] = useState(0);
  // use of the useEffect to get the req to the backend and then fetching the data and rendering them in the frontend
  useEffect(() => {
    axios.get('http://localhost:3000/data/7')
      .then(async (res) => {
        setTodo([res.data]);
      })
      .catch((err) => {
        console.log("Something went wrong ", err);
      });
  }, []);
  return (
    <>
      <div>
        <Wrapper width="100%" height="300px" >
          <button style={{ margin: "10px", fontSize: "30px", width: "40px", cursor: "pointer" }} >1</button>
          <button style={{ margin: "10px", fontSize: "30px", width: "40px", cursor: "pointer" }} >2</button>
          <button style={{ margin: "10px", fontSize: "30px", width: "40px", cursor: "pointer" }} >3</button>
          <button style={{ margin: "10px", fontSize: "30px", width: "40px", cursor: "pointer" }} >4</button>
        </Wrapper>
      </div>
      {todo.map((item) => <Header title={item.title} description={item.description} />)}
    </>
  )
}

export default App;