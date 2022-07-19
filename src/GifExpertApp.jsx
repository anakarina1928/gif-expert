import { React, useState } from 'react'
import AddCategory from './components/AddCategory';
import './assets/gifExpert.css'
import { GifGrid } from './components/GifGrid';




const GifExpertApp = () => {

    //ya tenemos un espacio en memoria para manejar las coategorias
    const [categories, setCategories] = useState([]);





    const onAddCategory = (newCategory) => {

        const lowercaseCategory = newCategory.toLowerCase();

        if (!categories.includes(lowercaseCategory)) {
            setCategories([lowercaseCategory]); //creo un nuevo arreglo, OPERADOR SPRead agregando una copia de mi arreglo "categories" y agrego la nueva categoria
        }

    }


    return (

        <section className='container'>


            



            <AddCategory
                type='text'
                
                onNewCategory={onAddCategory}
            />






            {categories.map((category) => {
                return (

                   


                       < GifGrid key={category} category={category} /> 

                   
                )

            })
            }



        </section>
    )
};

export default GifExpertApp;