import { useState, useEffect, useMemo } from "react"

const Task1 = () => {
    const [count, setCount] = useState(0);
    const [getValue, SetGetValue] = useState(1);

    const renderValue = (e) => {
        SetGetValue(e.target.value);
    }
    const sum =  useMemo(() => {
        let sum = 0
        for (let start = 0; start <= getValue; ++start) {
            sum += start;
        }
        return sum;
    },[getValue]);
    return (
        <>
            <input onChange={renderValue} type="number" placeholder="Enter Number" />
            <br></br>
            The sum is {sum}
            <br></br><br></br>
            <button onClick={() => setCount(count + 1)}>Count is: {count}</button>
        </>
    );
};

export default Task1;