import React from 'react'
import styles from "@/styles/title.module.scss";
export default function Title({children, ...props}) {
  return (
    <h2 className={styles.title} style={props.style}>{children}</h2>
  )
}
