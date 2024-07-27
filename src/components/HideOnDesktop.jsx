import React from 'react'
import styles from "@/styles/hideondesktop.module.scss"
export default function HideOnDesktop({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
    )
}
