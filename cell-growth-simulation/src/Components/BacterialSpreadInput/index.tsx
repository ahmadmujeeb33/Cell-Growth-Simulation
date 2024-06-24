import React, { useRef, useState, useMemo, useEffect } from 'react';
import './style/index.css';



interface BacterialSpreadInput {
    updateInterval: (interval: number) => void;
    spreading: boolean
}

export const BacterialSpreadInput: React.FC<BacterialSpreadInput> = ({ updateInterval, spreading }) => {
    
    const [input, setInput] = useState("");
    const [error, setError] = useState("")
    const [success,setSuccess] = useState(false)

    const refreshInterval = () => {
        const num = Number(input)

        console.log("spreading 456", spreading)

        if(spreading){
            setSuccess(false)
            setError("Reset simulation to update time")
        }

        else if(isNaN(num)){
            setSuccess(false)
            setError("Please enter a valid number")
        }
        else{
            setError("")
            setSuccess(true)
            updateInterval(parseInt(input, 10))

        }

    }

    const updateInput = (val:string) => {
        if(success){
            setSuccess(false)
        }

        else if(error != ""){
            setError("")
        }

        setInput(val)
    }

    return (
        <>
            <div className = "container">
                <div className = "input-container">
                    <input className = "input" placeholder="Set Interval(s)" onChange={(e) => updateInput(e.target.value)} />
                </div>
                <div className = "button-container">
                    <button className = "button" onClick={() => refreshInterval()}>Submit </button>
                </div>

                <div className = "message-container">
                    {error === "Please enter a valid number" &&  <span style = {{"color": "red"}}>{error}</span>}
                </div>
                <div className = "message-container">
                    {error === "Reset simulation to update time" &&  <span style = {{"color": "red"}}>{error}</span>}
                </div>
                <div className = "message-container">
                    {success  && <span style = {{"color": "green"}}>Sucessfully updated time</span>}
                </div>

            </div>
        </>
    );
};

