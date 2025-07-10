import { useState, useEffect } from "react";
import Wrapper from "../wrapperClass/Wrapper";
import Header from '../components/Header';
import axios from "axios";

const Task2 = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/data/${selectedId}`);
        setTodo([result.data]); // make it an array to map over
      } catch (err) {
        console.log("Something went wrong ", err);
      }
    };
    fetchData();
  }, [selectedId]); // re-run when ID changes

  return (
    <div>
      <Wrapper width="100%" height="300px" margin="10px">
        <button onClick={() => setSelectedId(1)}>1</button>
        <button onClick={() => setSelectedId(2)}>2</button>
        <button onClick={() => setSelectedId(3)}>3</button>
        <button onClick={() => setSelectedId(4)}>4</button>
        <br /><br /> id: {selectedId}
        {todo.map((item) => (
          <Header key={item.id} title={item.title} description={item.description} />
        ))}
      </Wrapper>
    </div>
  );
};

export default Task2    ;
