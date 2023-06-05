import React from 'react';
import styles from '@/styles/tag.module.scss';
export default function Tag({tag}) {
  return (
    <div className={styles.container}>{tag}</div>
  )
}
