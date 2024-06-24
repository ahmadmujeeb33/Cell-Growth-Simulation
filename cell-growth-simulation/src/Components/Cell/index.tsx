
import React, { useEffect, useState } from 'react';
import { FaBacterium } from "react-icons/fa6";

import './style/index.css';


interface Cell {
    rowIndex: number;
    colIndex: number;
    updateGrid: (rowIndex: number, colIndex: number) => void;
    changedCells:boolean;
    clearGrid:boolean;
    setChangedCells: React.Dispatch<React.SetStateAction<Set<string>>>
}

const Cell: React.FC<Cell> = ({rowIndex, colIndex, updateGrid, changedCells, clearGrid, setChangedCells}) =>  {

    const [bacteria, setBacteria] = useState(false)

    const updateBacteria = (rIdx:number,cIdx:number) => {
        if(bacteria){
            setBacteria(false)
            setChangedCells(new Set())
        }
        else{
            setBacteria(true)
        }
        updateGrid(rIdx, cIdx)

    }

    useEffect(() => {
        
        if(changedCells){
            
            setBacteria(true)
        }
       
    }, [changedCells])

    useEffect(() => {

        if(clearGrid && bacteria){
            setBacteria(false)

        }

    },[clearGrid])

    return (

        <td
            key={rowIndex.toString() + colIndex.toString()}
            className="cell"
            onClick={() => updateBacteria(rowIndex,colIndex)}
        >
           
            <div className="icon-container">
                <FaBacterium className={` ${bacteria ? 'bacteria-visible' : 'bacteria-hidden'}`} />
            </div>
        </td>

    )
}


const MemoizedCell = React.memo(Cell, (prevProps, nextProps) => {

    return (
        prevProps.rowIndex === nextProps.rowIndex &&
        prevProps.colIndex === nextProps.colIndex &&
        prevProps.changedCells === nextProps.changedCells &&
        prevProps.clearGrid === nextProps.clearGrid
    );
});

export { MemoizedCell as Cell };