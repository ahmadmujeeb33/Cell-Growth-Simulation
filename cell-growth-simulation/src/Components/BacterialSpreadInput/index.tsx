import React, { useRef, useState, useMemo, useEffect } from 'react';



interface BacterialSpreadInput {
    updateInterval: (interval: number) => void;
  }



export const BacterialSpreadInput: React.FC<BacterialSpreadInput> = ({ updateInterval }) => {
    const [input, setInput] = useState("");

    return (
        <>
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => updateInterval(parseInt(input, 10))}>Time Interval</button>
        </>
    );
};

