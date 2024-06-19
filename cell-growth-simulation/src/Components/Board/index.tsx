import React from 'react';

import './style/index.css';


export const Board = () => {

    const size: number = 20;
    // const rows: number[] = Array.from({ length: size }, (_, index) => index + 1);


    const createGrid = () => {
        return Array.from({ length: size }).map((_, rowIndex) => (
          <tr key={rowIndex} >
            {Array.from({ length: size }).map((_, colIndex) => (
              <td className="cell" key={colIndex}></td>
            ))}
          </tr>
        ));
      };

    return (
        <div className="board-container">
                <table className="my-table">
                    <tbody>
                    {createGrid()}
                    </tbody>
                </table>
        </div>
    )




}