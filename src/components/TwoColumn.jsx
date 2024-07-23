import React from 'react'
import styles from "@/styles/twoColumn.module.scss";

export default function TwoColumn({column1, column2, column_1_size, column_2_size}) {
  return (
    <div className={styles.twoColumn} >
      <div className={styles.column1} style={{flex: column_1_size}}>{column1}</div>
      <div className={styles.column2} style={{flex: column_2_size}}>{column2}</div>
    </div>
  )
}
