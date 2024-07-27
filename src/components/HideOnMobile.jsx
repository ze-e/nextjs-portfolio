import React from 'react'
import styles from "@/styles/hideonmobile.module.scss"
export default function HideOnMobile({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
    )
}
