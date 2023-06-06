import React from 'react'
import styles from "@/styles/textbox.module.scss"
export default function TextBox({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
