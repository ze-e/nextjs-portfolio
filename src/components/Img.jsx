import React from 'react'
import Image from 'next/image'
import styles from "@/styles/img.module.scss"

export default function Img({src, alt}) {
  return (
      <div className={styles.container}>
        <Image src={src} alt={alt} className={styles.img} width="100%" height="100%"/>
      </div>
  )
}