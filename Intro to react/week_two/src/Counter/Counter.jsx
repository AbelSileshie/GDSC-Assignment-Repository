import React, {useState} from 'react'
import './Counter.css'

export const Counter = () => {
    const [Counter, SetCounter]= useState(0);
    const handleincrement = ()=>{
        SetCounter  (Counter + 1);
    };
    const handledecrement = ()=>{

        SetCounter (Counter - 1 );
    }
    return (
    <div>
        <div className="conatiner">
        <button onClick={handleincrement}>Increase</button>
        <p>{Counter}</p>
        <button onClick={handledecrement}>Decrease</button>
        </div>
    </div>
  )
}
