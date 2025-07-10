import { useState, useEffect, useMemo } from "react"

const Task1 = () => {
    const [count, setCount] = useState(0);
    const [getValue, SetGetValue] = useState(1);

    const sum = useMemo(() => {
        let sum = 0
        for (let start = 0; start <= getValue; ++start) {
            sum += start;
        }
        return sum;
    }, [getValue]);

    return (
        <>
            <div style={{ padding:'10px', border:'1px solid black', margin:'8px'}}>
                <input onChange={((e) => SetGetValue(e.target.value))} type="number" placeholder="Enter Number" />
                <br></br>
                The sum is {sum}
                <br></br><br></br>
                <button onClick={() => setCount(count + 1)}>Count is: {count}</button>
            </div>
        </>
    );
};

export default Task1;