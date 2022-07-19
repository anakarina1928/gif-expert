import React from 'react'
import '../assets/gifExpert.css'

export const GifItem = ({titleGif, img}) => {
    return (
        
            <div className="col-12 col-md-6">
                
            <p className="display-6 text-center">{titleGif}</p>

           <img className='img-thumbnail ' src={img} alt={titleGif}/>
           </div>
    )
}
