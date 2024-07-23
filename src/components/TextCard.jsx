import React from 'react'
import styles from '@/styles/card.module.scss';
import Image from 'next/image';

export default function Card({data, imageW="50%", imageH="50%"}) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={data.img} alt={data.title} width={imageW}height={imageH}/>
      <div className={styles.title}>{data.title}</div>
    </div>
  )
}
