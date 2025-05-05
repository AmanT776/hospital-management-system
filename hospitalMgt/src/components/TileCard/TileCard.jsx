import React from 'react';

import styles from './styles/tilecard.module.css'

export default function TileCard({ title, description }) {
    return(
        <div className={styles.card}>
            <h2 className={styles['card-title']}>{title}</h2>
            <p className={styles['card-description']}>{description}</p>
        </div>
    )
}