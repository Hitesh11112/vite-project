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

export default Counter