import { React, useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import HeaderHH from './components/navBar'
import ButtonRecet from "./components/ButtonRecet";
import './assets/gifExpert.css'





const GifExpertApp = () => {

    //ya tenemos un espacio en memoria para manejar las coategorias
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);


    const onAddCategory = (newCategory) => {

        const lowercaseCategory = newCategory.toLowerCase();

        if (!categories.includes(lowercaseCategory)) {
            setCategories([lowercaseCategory]); //creo un nuevo arreglo, OPERADOR SPRead agregando una copia de mi arreglo "categories" y agrego la nueva categoria
            setOpen(true);
        }

    }
    const reset = () =>{
        setCategories([]);
        setOpen(false);
    }


    return (
       
          
            <section className='container'>
               

            {open ?  <ButtonRecet onClick={reset} text='¡LOS MEJORES GIFS PARA TUS AMIGOS!'/> : <HeaderHH logo='nombre' />}

                <AddCategory
                    type='text'
                    onNewCategory={onAddCategory}
                />

                {categories.map((category) => < GifGrid key={category} category={category} />)}

            </section>
           
    )
};

export default GifExpertApp;