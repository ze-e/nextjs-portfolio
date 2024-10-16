import React from 'react'
import styles from '@/styles/textCard.module.scss';
import Image from 'next/image';

export default function TextCard({data, imageW="50%", imageH="300px"}) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={data.img} alt={data.title} width={imageW} height={imageH}/>
      <div className={styles.textCardBox}>
        <div className={styles.textCardTitle}>{data.title}</div>
        <div className={styles.textCardContent}>{data.content}</div>
      </div>
    </div>
  )
}
