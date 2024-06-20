

import React, { useEffect, useState } from 'react';

type GridType = boolean[][];


export const useColonySpread = (spreading: boolean, grid: GridType,
    setGrid: React.Dispatch<React.SetStateAction<GridType>>, setChangedCells:React.Dispatch<React.SetStateAction<string[]>> ) => {

           
    let existingBacteriaCells: Set<string> = new Set();

    const getExistingColony = () => {
        
        grid.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
              if (cell) {
                existingBacteriaCells.add(`${rowIndex},${colIndex}`);
              }
            });

        })

    }

    const updateColony = () => {

        getExistingColony()

        console.log("existingBacteriaCells", existingBacteriaCells)

        console.log("existingBacteriaCells.has([rowIndex-1, colIndex-1]", existingBacteriaCells.has(`${0},${19}`))

        const newChangedCells: string[] = [];

        const newGrid = grid.map((row, rowIndex) => {
            return row.map((cell, colIndex) => {               
              if (
                existingBacteriaCells.has(`${rowIndex},${colIndex - 1}`) ||
                existingBacteriaCells.has(`${rowIndex},${colIndex + 1}`) ||
                existingBacteriaCells.has(`${rowIndex - 1},${colIndex}`) ||
                existingBacteriaCells.has(`${rowIndex + 1},${colIndex }`)
              ) {
                newChangedCells.push(`${rowIndex},${colIndex}`);
                return true; 
              }
              return cell; 
            });
        });
        
        setChangedCells(newChangedCells)
        setGrid(newGrid)
    // }


        // grid.forEach((row, rowIndex) => {
        //     row.forEach((cell, colIndex) => {
        //         if ( (existingBacteriaCells.has(`${rowIndex-1},${colIndex-1}`)) || 
        //             ( existingBacteriaCells.has(`${rowIndex+1},${colIndex+1}`)  ||
        //             (existingBacteriaCells.has(`${rowIndex},${colIndex-1}`)) ||
        //             (existingBacteriaCells.has(`${rowIndex},${colIndex+1}`))
        //             )) {
        //                 console.log("in here")
        //                 console.log("rowIndex", rowIndex)
        //                 console.log("colIndex", colIndex)
        //                 grid[rowIndex][colIndex] = true
        //             }
        //     });

        // })

        // console.log("gird line 55", grid)

        // setGrid(grid)

        // setGrid(prevGrid => 
        //     prevGrid.map((row, rIdx) => 
        //       row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? !cell : cell))
        //     )
        // );
    }

    useEffect(() =>{

        if(spreading){

            setInterval(() => {

                console.log("in line 90")
                updateColony();

            }, 1000)
        }

    }, [spreading,grid])
}

