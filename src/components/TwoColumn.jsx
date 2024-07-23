import React from 'react'
import styles from "@/styles/twoColumn.module.scss";

export default function TwoColumn({column1, column2, column_1_flex, column_2_flex, column_1_maxW, column_2_maxW}) {
  return (
    <div className={styles.twoColumn} >
      <div className={styles.column1} style={{flex: column_1_flex, maxWidth: column_1_maxW}}>{column1}</div>
      <div className={styles.column2} style={{flex: column_2_flex, maxWidth: column_2_maxW}}>{column2}</div>
    </div>
  )
}
