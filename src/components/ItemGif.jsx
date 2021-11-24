import React from 'react';

const ItemGif = ({id,title,url}) => {
    return (
        <div className="contenedor animate__jackInTheBox">
            <p>{title}</p>
            <img className="imagen" src={url} alt={title} />
        </div>
    )
}

export {ItemGif};
