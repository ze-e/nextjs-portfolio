import React from 'react'
import styles from "@/styles/tags.module.scss";
import { Tag } from '@/components';

export default function Tags({data}) {
  return (
    <div className={styles.container}>
      {data?.map((t, i) => (
        <div key={i} className={styles.tagContainer}>
          <Tag tag={t} />
        </div>
      ))}
    </div>
  )
}
