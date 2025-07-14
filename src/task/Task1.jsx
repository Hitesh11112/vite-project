import { useRecoilState, useRecoilValue, } from 'recoil';
import { countAtom, setValue } from "../store/atom/count";

const Task1 = () => {
    const [count, setCount] = useRecoilState(countAtom);

    const sum = useRecoilValue(setValue);
    return (
        <>
            <div style={{ padding: '10px', border: '1px solid black', margin: '8px' }}>
                <h1>The sum upto {count >= 0 ? `${count}` : count} {"=>"} {sum >= 0 ? `${sum}` : sum}</h1>
                <h3>Count Value is: {count}</h3>
                <button onClick={() => setCount((e) => e + 1)}>Increase</button>
                <button onClick={() => setCount((e) => e - 1)}>Decrease</button>
            </div>
        </>
    );
};

export default Task1;

