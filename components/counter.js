import App from "next/app";
import React, { Component, useRef, useState, useLayoutEffect, useEffect } from "react";


const Counter=()=>{
    const ref = useRef(null);

    const [count, setCount] = useState(0);
 
    const increase = () => {
        setCount(count+1);
    }

    const decrease = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

     

    return (
        <div>
            <br />
            <div ref={ref} class="box" style={{fontSize: '5rem', padding: '60px'}} id="box" >{count}</div> 

            <button onClick={reset} class="smallbox reset">Reset</button>
            <button onClick={decrease} class="smallbox minus">-</button>
            <button onClick={increase} class="smallbox plus">+</button>
        </div>
    );
}

export default Counter;