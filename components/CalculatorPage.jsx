import { useState } from 'react';
import Wrapper from "../wrapperClass/Wrapper";

const CalculatorPage = () => {
    
    const[inputValue,setInputValue] = useState(0);
    return (
        <>
            <Wrapper style={{ border: '1px solid black', height: '450px' }}>
                {/* this is the input tag of the calculator */}
                <div style={{ display: 'flex', justifyContent: 'center', height: '45%' }}>
                    <input type='number' style={{ width: '90%', textAlign: 'right', fontSize: '70px', margin: '10px', padding: '10px' }}></input>
                </div>
                {/* Button of the calculator */}
                <div >
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding:'5px' }}>
                        <Block ele={'AC'}/>
                        <Block ele={'CUT'} />
                        <Block ele={'%'} />
                        <Block ele={'/'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding:'5px' }}>
                        <Block ele={'7'} />
                        <Block ele={'8'} />
                        <Block ele={'9'} />
                        <Block ele={'X'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding:'5px' }}>
                        <Block ele={'4'} />
                        <Block ele={'5'} />
                        <Block ele={'6'} />
                        <Block ele={'-'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding:'5px'}}>
                        <Block ele={'1'} />
                        <Block ele={'2'} />
                        <Block ele={'3'} />
                        <Block ele={'='} />
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

function Block({ ele }) {
    return (
        <div>
            <button style={{ border: '1px solid black', width: '150px', height: '50px', alignItems: 'center', fontSize:'20px' }}>{ele}
            </button>
        </div>
    );
}

export default CalculatorPage;