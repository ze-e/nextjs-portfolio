import React from 'react'
import styles from "@/styles/text.module.scss";
export default function Text({children, ...props}) {
  return (
    <p className={styles.text} style={props.style}>{children}</p>
  )
}
