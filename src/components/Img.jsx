import React from 'react'
import Image from 'next/image'
import styles from "@/styles/img.module.scss"

export default function Img({src, alt, width, height}) {
  return (
      <div className={styles.container}>
        <Image src={src} alt={alt} className={styles.img} style={{width: `${width  ? width : "100%"}`, height: `${height  ? height : "100%"}`}} />
      </div>
  )
}