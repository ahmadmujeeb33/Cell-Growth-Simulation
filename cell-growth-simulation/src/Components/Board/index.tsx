import React from 'react';
import { FaBacterium } from "react-icons/fa6";

import './style/index.css';


export const Board = () => {

    const size: number = 20;
    // const rows: number[] = Array.from({ length: size }, (_, index) => index + 1);


    const createGrid = () => {
        return Array.from({ length: size }).map((_, rowIndex) => (
          <tr key={rowIndex} >
            {Array.from({ length: size }).map((_, colIndex) => (
               
                <td className="cell" key={colIndex}>
                    <div className="nothing">
                        <FaBacterium className="icon" />
                    </div>
                </td>

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