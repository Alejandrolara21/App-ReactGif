import React, {useState} from 'react'
import { AgregarCategoria } from './components/AgregarCategoria';
import { ListaGif } from './components/ListaGif';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon ball']);

    return (
        <div>
            <h2>GifExpertAPP</h2>
            <AgregarCategoria setCategorias={setCategorias} />
            <ul>
                {
                    categorias.map( cate =>
                         <ListaGif key={cate} categoria={cate} />
                    )
                }
            </ul>
        </div>
    )
}

export {GifExpertApp};