import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Calculator() {
    const navigate = useNavigate();
    const proceedCalculator = () => {
        navigate('/Calculator');
    };

    const [firstDigit, setFirstDigit] = useState('');
    const [secondDigit, setSecondDigit] = useState('');
    const [operation, setOperation] = useState('');
    const [title, setTitle] = useState('');
    
    useEffect(() => {
        let Total = 0;
        if (operation === '+'){
            Total = parseInt(firstDigit) + parseInt(secondDigit);
        } else if (operation === '-'){
            Total = parseInt(firstDigit) - parseInt(secondDigit);
        } else if (operation === '*'){
            Total = parseInt(firstDigit) * parseInt(secondDigit);
        } else if (operation === '/'){
            Total = parseInt(firstDigit) / parseInt(secondDigit);
        }else if (operation === '%'){
            Total = parseInt(firstDigit) % parseInt(secondDigit);
        } else {
        }
        setTitle(`${Total}`);
    }, [firstDigit, secondDigit, operation]);
    

  

    const handleCalculator = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <h1>Welcome to the Calculator page!</h1>
            <h2>{title}</h2>
            <form onSubmit={handleCalculator}>
            <div className="form-group">
                <label>First Digit</label>
                <input
                    type="integer"
                    className="form-control"
                    value={firstDigit}
                    required
                    maxLength={30}
                    onChange={(e) => setFirstDigit(e.target.value)}
                />
            </div>
            <div className="form-group" >
                <label>Second Digit</label>
                <input
                    type= "integer"
                    className="form-control"
                    value={secondDigit}
                    required
                    maxLength={30}
                    onChange={(e) => setSecondDigit(e.target.value)}
                />
            </div><div className="form-group" >
                <label>Operator</label>
                <input
                    type= "text"
                    className="form-control"
                    value={operation}
                    required
                    maxLength={30}
                    onChange={(e) => setOperation(e.target.value)}
                />
            </div>
            </form>
        </div>
    );
}

export default Calculator;
