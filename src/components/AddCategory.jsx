
import { React, useState } from 'react'
import { Header } from './Header';

const AddCategory = ({ type, placeholder, onNewCategory, className }) => {

    const [inputValue, setinputValue] = useState('');
    const [seart, setSeart] = useState(false);

    const onInputChange = (event) => {
        const eventChage = event.target.value;
        setinputValue(eventChage);
        console.log('que soy: ', event.target.value);
    }

    const onSubmit = (event) => {
        //para que no se recargue
        event.preventDefault();
        /* trim() es para eliminar los espacio en blanco de adelata y 
        atras de una cadena sin modificar el elemento existente.*/
        const categoryEntered = inputValue.trim()
        if (categoryEntered.length <= 1) return;
        setinputValue('');
        onNewCategory(categoryEntered);
        setSeart(true)
        /* recuerda que setCategories es una funcion
        necesitamos agregar un elemento nuevo y dejar los elementos que ya existian dentro del arreglo
        entonces podemos utilizar el operador spread para crear un nuevo arreglo y agregarle el 
        array anterior */
        /*El inputValue es donde tengo guardado el evento de lo que el usario escribio*/
        /* setCategories(categories => [inputValue,...categories])
         console.log(inputValue);
         */

    }
    return (
<nav className="navbar navbar-light bg-light  col-lg ">
        <div class="container-fluid">
            
                <a class="navbar-brand display-3">¡BUSCA LOS MEJORES GRIFS PARA TUS AMIGOS!</a>
                <form className='d-flex' onSubmit={onSubmit}>
                    <input
                        type={type}
                        value={inputValue}
                        onChange={onInputChange}
                        className={className}
                        placeholder="Search" aria-label="Search"


                    ></input>



                </form>

        </div>

        </nav>



    )
}
export default AddCategory
