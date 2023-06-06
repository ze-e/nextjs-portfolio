import React from 'react'
import styles from "@/styles/subtitle.module.scss";
export default function Subtitle({children}) {
  return (
    <h3 className={styles.subtitle}>{children}</h3>
  )
}
