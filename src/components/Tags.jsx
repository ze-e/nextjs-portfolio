import React from 'react'
import styles from "@/styles/tags.module.scss";
import { Tag } from '@/components';

export default function Tags({align, data, children}) {
  return (
    <div className={`${styles.container} `} style={{justifyContent: `${Boolean(align === "center") ? "center" : "start"}`}}>
      {data?.map((t, i) => <Tag key={i} tag={t} />)}
      {children}
    </div>
  )
}
