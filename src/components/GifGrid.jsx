import React from 'react'
import { GifItem } from './GifItem';
import '../assets/gifExpert.css'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { ButtonRecet } from './ButtonRecet';

/* deberiamos de obligar a que la castegoria siempre venga*/
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
   // const recet = () => location.reload();

    return (

        <>

            {
                isLoading && (<h2>Cargando...</h2>)
            }


            <section className='card-grid'>
               {/*<ButtonRecet onClick={recet} />*/}
                {

                    images.map(item => {
                        return (
                                <GifItem
                                    key={item.id}
                                    titleGif={item.title}
                                    img={item.url}
                                />
                        )
                    })
                }
            </section>
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