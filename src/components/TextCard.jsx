import React from 'react'
import styles from '@/styles/card.module.scss';
import Image from 'next/image';

export default function Card({data}) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={data.img} alt={data.title} width="100%" height="100%" />
      <div className={styles.title}>{data.title}</div>
    </div>
  )
}
