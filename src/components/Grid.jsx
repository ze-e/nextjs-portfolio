import React from 'react';
import styles from '@/styles/grid.module.scss';
import { Card } from '@/components';

export default function Grid({items}) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => <div className={styles.itemContainer} key={index}><Card data={item} /></div>)}
    </div>
  )
}
