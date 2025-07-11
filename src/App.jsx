import Task1 from "./task/Task1";
import Task2 from "./task/Task2";
import Task3 from "./task/Task3";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil'
import Wrapper from "./wrapperClass/Wrapper";


const App = () => {

  return (
    <>
      <Wrapper style={{ display: 'flex', color: 'white', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', fontSize: '35px', margin: '8px', padding: '20px' }}> Hello every One This is the Header Section of the Page</Wrapper>
      
      {/* <BrowserRouter>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Task3 />
        </div>
      </BrowserRouter> */}
      <RecoilRoot>
        <Task1/>
      </RecoilRoot>
    </>
  );
};

export default App;
