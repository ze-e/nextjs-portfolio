import React from 'react';
import styles from '@/styles/grid.module.scss';
import { Card, TextCard } from '@/components';

export default function Grid({ items, type, orientation = "h", imageW="100%", imageH="100%" }) {

  return (
    <div className={
      `${styles.container} 
        ${(orientation === "v" || orientation === "V" || orientation === "vertical" || orientation === "Vertical") && styles.vertical
      }`}>
      {items.map(item => 
        <div 
          className={`${styles.itemContainer} ${type === "text" && styles.text}`} 
          key={item.title}>
            {type === "text" ? 
            <TextCard data={item} imageW={imageW} imageH={imageH}/> : 
              <Card data={item} type={type} imageW={imageW} imageH={imageH}
            />}
        </div>)}
    </div>
  )
}
