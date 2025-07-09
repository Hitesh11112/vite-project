import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Wrapper from "../wrapperClass/Wrapper";
const Landing = lazy(() => import("../components/Landing"));
const  Dashboard = lazy(() => import("../components/Dashboard"));
const Calculator = lazy(() => import("../components/CalculatorPage"));

const Task3 = () => {
    const navigate = useNavigate();
    return (
        <div style={{  border: '1px solid green', padding: '8px', borderRadius: '6px', margin: '8px', width: '70%' }}>
            <Wrapper style={{ display: 'flex', justifyContent: 'space-around', border: '0px' }}>
                <button onClick={() => navigate("/")}>Landing Page</button>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
                <button onClick={() => navigate("/calculator")}>calculator</button>
            </Wrapper>
            <br></br><br></br>
            <Routes>
                <Route path="/" element={<Suspense fallback="Loading page..."><Landing /></Suspense>} />
                <Route path="/dashboard" element={<Suspense fallback="Loading page..."><Dashboard /></Suspense>} />
                <Route path='/calculator' element={<Suspense fallback="Loading Page...."><Calculator/></Suspense>}></Route>
            </Routes>
        </div>
    );
}

export default Task3;

