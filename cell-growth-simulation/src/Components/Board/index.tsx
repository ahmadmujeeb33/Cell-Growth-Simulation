import React, { useState } from 'react';
import { FaBacterium } from "react-icons/fa6";

import './style/index.css';

const createInitalGrid = (size:number) => {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => false));
}


export const Board = () => {

    const size: number = 20;

    const [grid, setGrid] = useState(()=> createInitalGrid(size))


    const toggleIcon = (rowIndex:number, colIndex:number) => {

        setGrid(prevGrid => 
            prevGrid.map((row, rIdx) => 
              row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? !cell : cell))
            )
        );
    }

    return (
        <div className="board-container">
            <table className="my-table">
                <tbody>
                    {grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="cell"
                                    onClick={() => toggleIcon(rowIndex, colIndex)}
                                >
                                    <div className="icon-container">
                                        {cell ?  <FaBacterium className="icon" />  : null}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )




}