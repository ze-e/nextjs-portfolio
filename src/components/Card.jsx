import React from 'react'
import styles from '@/styles/card.module.scss';
import Link from 'next/link';
import defaultImg from "@/assets/project.jpg";
import defaultVideoImg from "@/assets/video.jpg";
import Image from 'next/image';

export default function Card({data, type="project", imageW="100%", imageH="300px"}) {
  return (
    <div className={styles.container}>
      <Link className={styles.imageContainer} style={{width:imageW, height:imageH}} href={type === 'video' ? `videos/${data.title}` : `portfolio/${data.title}`}>
        {
          type === 'video'
            ?
          <img className={styles.image} src={data.img ? data.img : defaultVideoImg} alt={data.title} />
          :
          <Image className={styles.image} src={data.img ? data.img : defaultImg} alt={data.title} />
        }
      </Link>
      <div className={styles.title}>{data.title}</div>
    </div>
  )
}
