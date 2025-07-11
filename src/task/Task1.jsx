import { useRecoilState, useRecoilValue,  } from 'recoil';
import { countAtom, setValue} from "../store/atom/count";

const Task1 = () => {
    const [count, setCount] = useRecoilState(countAtom);

    const sum = useRecoilValue(setValue);
    return (
        <>  
            <div style={{ padding:'10px', border:'1px solid black', margin:'8px'}}>
                The sum is {sum}
                <br></br><br></br>
                <button onClick={() => setCount((e)=>e+1)}>Count is: {count}</button>
            </div>
        </>
    );
};

export default Task1;

