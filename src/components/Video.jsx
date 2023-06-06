import React from 'react';
import styles from "@/styles/video.module.scss"

export default function Video({ src, title}) {
  return (
    <div className={styles.container}>
      <iframe className={styles.frame} title={title} src={src} />
    </div>
  )
}
