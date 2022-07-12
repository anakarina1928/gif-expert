import React from 'react'
import { useState, useEffect } from 'react';
import { getGifs } from '../api/api'

/* deberiamos de obligar a que la castegoria siempre venga*/
export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);

    useEffect(()=>{
        getGifs(category);
    },[])// si dejo la dependencia vacia [], esto significa que el useEfect solo
    // se va a disparar la primera vez que se crea 

    //const api = getGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            <h5>{counter}</h5>

            <button onClick={()=> setCounter(counter+1)}>+1</button>


        </>
    )
}




/*<ol>
    {categories.map((category, index) => {
        return (
            <li key={index}>{category}</li>
        )

    })
    }
</ol>*/