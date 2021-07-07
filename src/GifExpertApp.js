import React, { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GitGrid } from './components/GitGrid';

export default function GitExpertApp () {

    const [categorias, setCategorias] = useState(['Naruto']);

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategoria setCategorias={ setCategorias } />
            <hr/>
            <ol>
                {
                    categorias.map( (cat, i) => <GitGrid key={i} categoria={ cat }/>)
                }
            </ol>
        </>
    )
}