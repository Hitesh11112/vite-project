import {useState, useEffect, useMemo} from "react"

const Task1 = () => {
    const [count,setCount] = useState(0);
    
    return(
        <>
        <button onClick={()=>setCount(count+1)}>Count is: {count}</button>
        </>
    );
};

export default Task1;