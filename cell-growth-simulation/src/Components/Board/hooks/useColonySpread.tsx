

import { time } from 'console';
import React, { useEffect, useState } from 'react';

type GridType = boolean[][];


export const useColonySpread = (spreading: boolean,setGrid: React.Dispatch<React.SetStateAction<GridType>>, 
                               setChangedCells:React.Dispatch<React.SetStateAction<Set<string>>>,timeInterval: number ) => {

           
    const getExistingColony = (grid: boolean[][]) => {

      let existingBacteriaCells: Set<string> = new Set();
      grid.forEach((row, rowIndex) => {
          row.forEach((cell, colIndex) => {
            if (cell) {
              existingBacteriaCells.add(`${rowIndex},${colIndex}`);
            }
          });

      })

      return existingBacteriaCells;

    }

    const updateColony = ( grid: boolean[][]) => {

        const existingBacteriaCells = getExistingColony(grid);

        const newChangedCells = new Set<string>();

        const newGrid = grid.map((row, rowIndex) => {
            return row.map((cell, colIndex) => {               
              if (
                existingBacteriaCells.has(`${rowIndex},${colIndex - 1}`) ||
                existingBacteriaCells.has(`${rowIndex},${colIndex + 1}`) ||
                existingBacteriaCells.has(`${rowIndex - 1},${colIndex}`) ||
                existingBacteriaCells.has(`${rowIndex + 1},${colIndex }`)
              ) {
                newChangedCells.add(`${rowIndex},${colIndex}`);
                return true; 
              }
              return cell; 
            });
        });
        

        setChangedCells(newChangedCells)

        return newGrid
    
    }


    useEffect(() =>{

      if(spreading){
          
          const interval = setInterval(() => {
            setGrid(prevGrid =>  updateColony(prevGrid))

          }, timeInterval * 1000)

          return () => clearInterval(interval);
      }
   }, [spreading])


  

    
   
}

