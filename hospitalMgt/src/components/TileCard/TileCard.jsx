import React from 'react';

import './styles/tilecard.css'

export default function TileCard({ title, description }) {
    return(
        <>
            <div className="card">
                <h2 className='card-title'>{title}</h2>
                <p className='card-description'>{description}</p>
            </div>
        </>
      
    )
}