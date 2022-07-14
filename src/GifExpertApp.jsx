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

        <>
            <h1>GifExpertApp</h1>

            

            <AddCategory
                type='text'
                placeholder={'buscado'}
                onNewCategory={onAddCategory}
            />

            {categories.map((category, index) => {
                return (
                    
                
                    <GifGrid 
                    key={index}
                    category={category}
                   
                    />
                    
                )

            })
            }


        </>
    )
};

export default GifExpertApp;