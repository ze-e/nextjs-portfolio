import React from 'react'
import styles from "@/styles/twoColumn.module.scss";

export default function TwoColumn({column1, column2}) {
  return (
    <div className={styles.twoColumn}>
      <div className={styles.column1}>{ column1}</div>
      <div className={styles.column2}>{column2}</div>
    </div>
  )
}
