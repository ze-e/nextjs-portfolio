import React from 'react'
import styles from "@/styles/margin.module.scss"
export default function Margin({children}) {
  return (
    <div className={styles.container}>
        {children}
    </div>
    )
}
