import React from 'react'
import { useState, useEffect } from 'react';
import { getGifs } from '../api/api'

/* deberiamos de obligar a que la castegoria siempre venga*/
export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);// si dejo la dependencia vacia [], esto significa que el useEfect solo
    // se va a disparar la primera vez que se crea 


    //const api = getGifs(category);

    return (
        <>
            {
                images.map(item => {
                    return (
                        <div key ={item.id}>

                        <p>{item.title}</p>

                       <img src={item.url}/>

                        </div>
                    )

                })

            }


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