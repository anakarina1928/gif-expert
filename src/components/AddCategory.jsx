
import { React, useState } from 'react'

const AddCategory = ({ type, placeholder,setCategories }) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event) => {
        const eventChage = event.target.value;
        setinputValue(eventChage);
        console.log('que soy: ', event.target.value);
    }
    const onSubmit= (event) =>{
        //para que no se recargue
        event.preventDefault();

        /* recuerda que setCategories es una funcion
        necesitamos agregar un elemento nuevo y dejar los elementos que ya existian dentro del arreglo
        entonces podemos utilizar el operador spread para crear un nuevo arreglo y agregarle el 
        array anterior */ 
        /*El inputValue es donde tengo guardado el evento de lo que el usario escribio*/ 
        setCategories(categories => [inputValue,...categories])
        console.log(inputValue);
    }
    return (

        <form onSubmit={(event)=>onSubmit(event)}>
            <input
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={onInputChange}


                
            ></input>
        </form>

    )
}
export default AddCategory
