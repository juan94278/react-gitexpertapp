import React from 'react'

export const GifGridItem = ( props ) => {
    
    const { title, url } = props;

    return (
        <div className="card animate__animated animate__bounce animate__delay-2s">
            <img src={url} alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
