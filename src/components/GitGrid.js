import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GitGrid = ({ categoria }) => {

    const { data: images, loading } = useFetchGifs( categoria );

    return (
        <>
            <h3 className="animate__fadeIn">
                {categoria}
            </h3>
            { loading && <p className="animate__flash">Cargando...</p> }
            <div className="card-grid">
                <ol>
                    {
                        images.map( img => <GifGridItem key={img.id} {...img} />)
                    }
                </ol>
            </div>
        </>
    )
}
