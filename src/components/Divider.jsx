import React from 'react';
import styles from '@/styles/divider.module.scss';
import Image from 'next/image';

export default function Divider({ image = null, background = null, height=null}) {
  const containerStyle = {
    ...(background ? { background } : {}),
    ...(height ? { height } : {}),
  };
  return (
    <div className={styles.container} style={containerStyle}>
        {image && <Image className={styles.image} src={image} alt={"Divider"}/>}
    </div>
  )
}
