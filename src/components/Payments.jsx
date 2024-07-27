import React from 'react'
import styles from "@/styles/payments.module.scss"
export default function Payments({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
    )
}
