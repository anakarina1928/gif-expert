
import { useState, useEffect } from "react";
import { getGifs } from "../api/api";

export const useFetchGifs = (category) => {
    //console.log("calling me: useFetchGifs, with:", category);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    const getImages = async () => {
       // console.log("calling me: useFetchGifs -> getImages, with:", category);
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
        //console.log("called setImages, for, with", category, newImages);
        
    }

    useEffect(() => {
        getImages();
    }, []);// si dejo la dependencia vacia [], esto significa que el useEfect solo
    // se va a disparar la primera vez que se crea 


    return{
        images:images,
        isLoading:isLoading,

    }

}