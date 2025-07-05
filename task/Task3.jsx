import { BrowserRouter, Routes, Route ,useNavigate } from "react-router-dom";
import Landing from "../components/Landing";
import Dashboard from "../components/Dashboard";


const Task3 = () => {
    const navigate = useNavigate();
    
    return (

        <div style={{border:'1px solid green', padding:'8px', borderRadius:'6px '}}>
            <button onClick={() =>navigate("/")}>Landing Page</button>
            <button onClick={() =>navigate("/dashboard")}>Dashboard</button>
            <br></br><br></br>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </div>
    );
}

export default Task3;

