
import React, { useState } from 'react';
import { Board } from '../Board';
import { CiPlay1 } from "react-icons/ci";


export const Simulation = () => {

    const [spreading, setSpreading] = useState(false)

    return (
        <div style={{backgroundColor:"black"}}>
            <Board spreading/>
            <CiPlay1 style={{fontSize:"50px", color:"white"}} onClick={() => setSpreading(true)}/>
        </div>
    )

}
