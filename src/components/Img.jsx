import React from 'react'
import Image from 'next/image'
import styles from "@/styles/img.module.scss"

export default function Img({src, alt, sizes}) {
  return (
      <div className={`${styles.container} ${styles.className}`}>
        <Image src={src} alt={alt} fill style={{objectFit:"contain", position: "relative", width: "100%", height:"100%"}} sizes={sizes}/>
      </div>
  )
}