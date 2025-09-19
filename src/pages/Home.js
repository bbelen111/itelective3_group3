import { React } from 'react';
import { useNavigate } from "react-router-dom";
function Home(){

    const navigate = useNavigate();
    const proceedPortfolio = () => {
        navigate('/Portfolio');
    }

    return (
        <div>
            <h1>Welcome to the Home page!</h1>
            <button type="button" class="btn btn-success" onClick={proceedPortfolio}>My Portfolio</button>
        </div>
    );
}

export default Home;