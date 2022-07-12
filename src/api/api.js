export const getGifs = async (category) => {
    /* le indicamos la categoria que estamos buscandov mas el limite de la data que vamos a querer (numero maximo de objetos a devolver) */ 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VCdIaUzT5OavOUs2b6DNlDk3SDu7QGiu&q=${category}&limit=10`

    /* ahora haremos la peticion http con fetch */ 
    const resp = await fetch(url);
    const {data}= await resp.json();

    //console.log('api ', data);

    
    const gifs = data.map(img=>{

        return{
            id: img.id,
            title:img.title,
            url: img.images.downsized_medium.url,
        }
    })

   console.log('estos son las imagenes: ', gifs)
   return gifs;
};

