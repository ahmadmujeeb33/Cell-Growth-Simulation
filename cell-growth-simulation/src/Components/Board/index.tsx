import React, { useState } from 'react';
import { FaBacterium } from "react-icons/fa6";
import { useColonySpread } from './hooks/useColonySpread';
import { Cell } from '../Cell';

import './style/index.css';



interface Board {
    spreading: boolean;
   
}

const createInitalGrid = (size:number) => {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => false));
}


export const Board: React.FC<Board> = ({spreading}) => {

    const size: number = 20;

    const grid = createInitalGrid(size)

    // useColonySpread(spreading, grid);


    return (
        <div className="board-container">
            <table className="my-table">
                <tbody>
                    {grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <Cell colIndex rowIndex/>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

  