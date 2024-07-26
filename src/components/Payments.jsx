import React from 'react'
import styles from "@/styles/Payments.module.scss"
export default function Payments({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
    )
}
