import React from 'react'
import styles from '@/styles/card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import defaultImg from "@/assets/project.jpg";
import defaultVideoImg from "@/assets/video.jpg";

export default function Card({data, type="project"}) {
  return (
    <div className={styles.container}>
      <Link className={styles.imageContainer} href={type === 'video' ? `videos/${data.title}` : `portfolio/${data.title}`}>
        <Image className={styles.image} src={data.img ? data.img : type === 'video' ? defaultVideoImg : defaultImg} alt={data.title} />
      </Link>
      <div className={styles.title}>{data.title}</div>
    </div>
  )
}
