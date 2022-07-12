import React from 'react'
import '../assets/gifExpert.css'

export const GifItem = ({titleGif, img}) => {
    return (
        <div className='card' >

            <h3>{titleGif}</h3>

           <img src={img} alt={titleGif}/>

        </div>
    )
}
