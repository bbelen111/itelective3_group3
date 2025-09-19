import { React } from 'react';
import { useNavigate } from "react-router-dom";
function Portfolio(){
    const navigate = useNavigate();
    const proceedHome = () => {
        navigate('/Home');
    }
    return (
        <div>
            <h1>Welcome to the Portfolio page!</h1>
            <button type="button" class="btn btn-success" onClick={proceedHome}>My Home</button>
        </div>
    );
}

export default Portfolio;