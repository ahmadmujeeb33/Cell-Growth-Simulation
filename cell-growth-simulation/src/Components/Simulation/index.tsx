
import React, { useRef, useState } from 'react';
import { Board } from '../Board';
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

import { GrPowerReset } from "react-icons/gr";

import {BacterialSpreadInput} from '../BacterialSpreadInput';



export const Simulation = () => {

    const [spreading, setSpreading] = useState(false)
    const [clearGrid, setClearGrid] = useState(false)
    const [timeInterval, setTimeInterval] = useState(1)

    const resetSimulation = () => {
        setSpreading(false);
        setClearGrid(true);
    }

    const startSimulation = () => {
        setClearGrid(false)
        setSpreading(true)
    }

    const updateInterval = (time:number) => {

        setTimeInterval(time)

    } 



    return (
        <div style={{backgroundColor:"black"}}>
            <Board spreading={spreading} clearGrid={clearGrid} timeInterval={timeInterval}/>
            {
                !spreading ? <CiPlay1 style={{fontSize:"50px", color:"white", cursor:"pointer"}} onClick={() => startSimulation()}/>:
                <CiPause1 style={{fontSize:"50px", color:"white", cursor:"pointer"}} onClick={() => setSpreading(false)} />
                
            }

            <GrPowerReset style={{fontSize:"50px", color:"white", cursor:"pointer"}}  onClick={() => resetSimulation()} />

            <BacterialSpreadInput updateInterval={updateInterval}/>
            
        </div>
    )

}
