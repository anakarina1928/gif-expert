import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Loading } from './Loading';
import '../assets/gifExpert.css'

/* deberiamos de obligar a que la castegoria siempre venga*/
export const GifGrid = ({ category}) => {

    const { images, isLoading } = useFetchGifs(category);
   // const recet = () => location.reload();

    return (

        <>

            {
                isLoading && (<Loading />)
            }


            <section className='container'>

            <div className="row row-cols-2">
              
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
              </div>
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