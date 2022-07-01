import { React, useState } from 'react'
import  AddCategory  from './components/AddCategory';
import './assets/gifExpert.css'



const GifExpertApp = () => {

    //ya tenemos un espacio en meoria para manejar las coategorias
    const [categories, setCategories] = useState(['One Punch', 'pupilo']);
    console.log(categories);

    const onAddCategory = () =>{
        //creo un nuevo arreglo, OPERADOR SPRead agregando una copia de mi arreglo "categories" y agrego la nueva categoria
        setCategories([...categories, 'pedro']);
    }

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory
            type='text'
            placeholder={'buscado'}
            setCategories={setCategories}


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