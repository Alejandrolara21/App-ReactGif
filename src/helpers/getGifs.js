const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PGInBkyj9PDcwMhjGR92E4MeAg9aAXRD&q=${encodeURI(categoria)}&limit=5`;

    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img =>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}

export {getGifs};