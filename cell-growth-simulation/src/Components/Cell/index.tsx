
import React, { useEffect, useState } from 'react';
import { FaBacterium } from "react-icons/fa6";

import './style/index.css';


interface Cell {
    rowIndex: number;
    colIndex: number;
    updateGrid: (rowIndex: number, colIndex: number) => void;
    changedCells:boolean;
}

const Cell: React.FC<Cell> = ({rowIndex, colIndex, updateGrid, changedCells}) =>  {

    const [bacteria, setBacteria] = useState(false)

    const updateBacteria = (rIdx:number,cIdx:number) => {
        bacteria ? setBacteria(false): setBacteria(true)
        updateGrid(rIdx, cIdx)
    }



    useEffect(() => {
        if(changedCells){
            setBacteria(true)
            updateGrid(rowIndex, colIndex)
        }
    
    }, [changedCells])

    return (

        <td
            key={rowIndex.toString() + colIndex.toString()}
            className="cell"
            onClick={() => updateBacteria(rowIndex,colIndex)}
        >
            <div className="icon-container">
                {bacteria ?  <FaBacterium className="icon" />  : null}
            </div>
        </td>

    )
}


const MemoizedCell = React.memo(Cell, (prevProps, nextProps) => {
    return (
        prevProps.rowIndex === nextProps.rowIndex &&
        prevProps.colIndex === nextProps.colIndex &&
        prevProps.changedCells === nextProps.changedCells
    );
});

export { MemoizedCell as Cell };