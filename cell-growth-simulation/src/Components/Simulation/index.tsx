
import React, { useRef, useState } from 'react';
import { Board } from '../Board';
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";


export const Simulation = () => {

    const [spreading, setSpreading] = useState(false)

    console.log("spreadin line 12", spreading)

    return (
        <div style={{backgroundColor:"black"}}>
            <Board spreading={spreading}/>
            {
                !spreading ? <CiPlay1 style={{fontSize:"50px", color:"white", cursor:"pointer"}} onClick={() => setSpreading(true)}/>:
                <CiPause1 style={{fontSize:"50px", color:"white", cursor:"pointer"}} onClick={() => setSpreading(false)} />


            }
            
        </div>
    )

}
