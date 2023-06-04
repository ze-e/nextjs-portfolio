import React from 'react'
import styles from '@/styles/card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({data}) {
  return (
    <div className={styles.container}>
      <Link className={styles.imageContainer} href={`portfolio/${data.title}`}>
        <Image src={data.src} alt={data.title} />
      </Link>
      <div className={styles.blurb}>{data.blurb}</div>
    </div>
  )
}
