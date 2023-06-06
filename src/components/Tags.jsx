import React from 'react'
import styles from "@/styles/tags.module.scss";
import { Tag } from '@/components';

export default function Tags({data, children}) {
  return (
    <div className={styles.container}>
      {data?.map((t, i) => <Tag key={i} tag={t} />)}
      {children}
    </div>
  )
}
