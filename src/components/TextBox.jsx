import React from 'react'
import styles from "@/styles/textbox.module.scss"
export default function TextBox({children, ...props}) {
  return (
    <div className={`${styles.container} ${props.style}`}>{children}</div>
  )
}
