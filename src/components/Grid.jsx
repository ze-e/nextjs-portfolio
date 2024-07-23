import React from 'react';
import styles from '@/styles/grid.module.scss';
import { Card, TextCard } from '@/components';

export default function Grid({ items, type, orientation = "h" }) {

  return (
    <div className={
      `${styles.container} 
        ${(orientation === "v" || orientation === "V" || orientation === "vertical" || orientation === "Vertical") && styles.vertical
      }`}>
      {items.map(item => 
        <div 
          className={styles.itemContainer} 
          key={item.title}>
            {type === "text" ? 
            <TextCard data={item}/> : 
              <Card data={item} type={type}
            />}
        </div>)}
    </div>
  )
}
