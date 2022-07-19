
import { React, useState } from 'react'
import felicidad from '../assets/felicidad.svg'


const AddCategory = ({ type, onNewCategory, }) => {

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
        <nav className="navbar navbar-light bg-light ">

            <form className='container-fluid' onSubmit={onSubmit}>

                <div className="input-group">
                <img className="input-group-text d-inline-block align-text-top" id="basic-addon1" src={felicidad} width="50" height="50" />
                    <input
                        type={type}
                        value={inputValue}
                        onChange={onInputChange}
                        className="form-control"
                        placeholder="Buscar"
                        aria-label="Username"
                        aria-describedby="basic-addon1"

                    ></input>
                </div>



            </form>



        </nav>



    )
}
export default AddCategory
