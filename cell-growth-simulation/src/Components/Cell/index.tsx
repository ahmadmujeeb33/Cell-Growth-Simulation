
import React, { useState } from 'react';
import { FaBacterium } from "react-icons/fa6";

import './style/index.css';


interface Cell {
    rowIndex: boolean;
    colIndex: boolean;
   
}

export const Cell: React.FC<Cell> = (rowIndex, colIndex) => {

    const [bacteria, setBacteria] = useState(false)

    console.log("bacteria", bacteria)

    return (

        <td
            key={rowIndex.toString() + colIndex.toString()}
            className="cell"
            onClick={() => bacteria ? setBacteria(false): setBacteria(true)}
        >
            <div className="icon-container">
                {bacteria ?  <FaBacterium className="icon" />  : null}
            </div>
        </td>

    )



}