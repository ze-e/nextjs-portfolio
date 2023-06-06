import React from 'react';
import styles from '@/styles/grid.module.scss';
import { Card } from '@/components';
import { v4 as createId } from 'uuid';

export default function Grid({items, type}) {
  return (
    <div className={styles.container}>
      {formatedItems.map((item, index) => <div className={styles.itemContainer} key={index}><Card data={item} type={type} /></div>)}
    </div>
  )
}
