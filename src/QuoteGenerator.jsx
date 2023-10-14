import { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, []);

    const fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container container-fluid">
            <div className="card" style={{ margin: "auto", top: "200px" }}>
                <div className="card-body">
                    <h1 className='title card-title d-flex justify-content-center mb-5'>ADVICE</h1>
                    <h2 className="text card-text d-flex justify-content-center mx-5 text-center text-wrap">{advice}</h2>
                    <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-lg mt-5 px-5 hover" onClick={fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteGenerator;

