import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AgregarCategoria = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState("");

    const agregarCategoria = (e) =>{
        setInputValue(e.target.value);
    }

    const enterCategoria = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length >2){
            setCategorias(categoria => [inputValue]);
            setInputValue("");
        }
    }

    return (
        <div className="contenedor">
            <form  className="formulario" onSubmit={enterCategoria}>
                <label>Categoria: </label>
                <input type="text" value={inputValue} onChange={agregarCategoria}/>
            </form>
        </div>
    )
}

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export {AgregarCategoria};