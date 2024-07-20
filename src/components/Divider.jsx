import React from 'react';
import styles from '@/styles/centered.module.scss';

export default function Divider({ image = null, background = background}) {
  
  return (
    <div className={styles.container} style={background ? { background } : {}}>
        {image && <img src={image} alt={"Divider"}/>}
    </div>
  )
}
