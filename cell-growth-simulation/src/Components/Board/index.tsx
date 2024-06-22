import React, { useRef, useState, useMemo, useEffect } from 'react';
import { FaBacterium } from "react-icons/fa6";
import { useColonySpread } from './hooks/useColonySpread';
import { Cell } from '../Cell';


import './style/index.css';






interface Board {
    spreading: boolean;
    clearGrid: boolean;
    timeInterval: number;    
   
}



const createInitalGrid = (size:number) => {
   return Array.from({ length: size }, () => Array.from({ length: size }, () => false));
  
}


export const Board: React.FC<Board> = ({spreading,clearGrid, timeInterval}) => {

    const size: number = 10;

    const [grid, setGrid] = useState(()=> createInitalGrid(size))


    const [changedCells, setChangedCells] = useState<Set<string>>(new Set());;

    useColonySpread(spreading,setGrid, setChangedCells, timeInterval);


  
    const updateGrid = (rowIndex:number, colIndex:number) => {

        setGrid(prevGrid => 
            prevGrid.map((row, rIdx) => 
              row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? !cell : cell))
            )
        );
    }

    useEffect(() => {

        if(clearGrid){
            setGrid(prevGrid => 
                prevGrid.map((row, rIdx) => 
                  row.map((cell, cIdx) => false)
                )
            );

            setChangedCells(new Set())
        }

    },[clearGrid])

    return (
        <div className="board-container">
            <table className="my-table">
                <tbody>
                    {grid.map((row, rowIndex:number) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex:number) => (     
                                <Cell  
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    updateGrid={updateGrid}
                                    changedCells = {changedCells.has(`${rowIndex},${colIndex}`)}
                                    clearGrid= {clearGrid}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}


  
