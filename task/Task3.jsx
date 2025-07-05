import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "../components/Landing";
import Dashboard from "../components/Dashboard";
import Wrapper from "../wrapperClass/Wrapper";

const Task3 = () => {
    const navigate = useNavigate();

    return (

        <div style={{ border: '1px solid green', padding: '8px', borderRadius: '6px', margin: '8px', width:'70%'}}>
            <Wrapper style={{display:'flex', justifyContent:'space-around', border:'0px'}}>
                <button onClick={() => navigate("/")}>Landing Page</button>
                <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            </Wrapper>
            <br></br><br></br>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </div>
    );
}

export default Task3;

