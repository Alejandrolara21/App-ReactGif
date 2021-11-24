import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { ItemGif } from './ItemGif';
import 'animate.css';

const ListaGif = ({categoria}) => {

    const {loading, data:imagenes} = useFetchGifs(categoria);

    return (
        <div>
            <h3>{categoria}</h3>
            {loading && <p className="animate__rollOut">Cargando Informacion...</p>}
            <div className="card-grid animate__rollOut">
                    {
                        imagenes.map(img => <ItemGif key={img.id} {...img}/>)
                    }
            </div>
        </div>
    )
}

export {ListaGif};