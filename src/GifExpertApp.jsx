import { React, useState } from 'react'
import  AddCategory  from './components/AddCategory';
import './assets/gifExpert.css'



const GifExpertApp = () => {

    //ya tenemos un espacio en meoria para manejar las coategorias
    const [categories, setCategories] = useState([]);
    console.log(categories);

    const onAddCategory = (newCategory) =>{
        console.log(newCategory);
        const lowercaseCategory = newCategory.toLowerCase();
        if(!categories.includes(lowercaseCategory)){
            setCategories([lowercaseCategory,...categories ]); //creo un nuevo arreglo, OPERADOR SPRead agregando una copia de mi arreglo "categories" y agrego la nueva categoria
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
        

           
            <ol>
                {categories.map((category, index) => {
                    return (
                        <li key={index}>{category}</li>
                    )

                })
                }
            </ol>

        </>
    )
};

export default GifExpertApp;