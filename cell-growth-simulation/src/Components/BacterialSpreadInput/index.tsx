import React, { useRef, useState, useMemo, useEffect } from 'react';
import './style/index.css';



interface BacterialSpreadInput {
    updateInterval: (interval: number) => void;
}



export const BacterialSpreadInput: React.FC<BacterialSpreadInput> = ({ updateInterval }) => {
    
    const [input, setInput] = useState("");
    const [error, setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const refreshInterval = () => {
        const num = Number(input)

        if(isNaN(num)){
            setSuccess(false)
            setError(true)
        }
        else{
            setError(false)
            setSuccess(true)
            updateInterval(parseInt(input, 10))

        }

    }

    return (
        <>
            <div className = "container">
                <div className = "input-container">
                    <input className = "input" placeholder="Set Interval(s)" onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className = "button-container">
                    <button className = "button" onClick={() => refreshInterval()}>Submit </button>
                </div>

                <div className = "message-container">
                    {error && <span style = {{"color": "red"}}>Please enter a valid number</span>}
                </div>
                <div className = "message-container">
                    {success && <span style = {{"color": "green"}}>Sucessfully updated time</span>}
                </div>

            </div>
        </>
    );
};

