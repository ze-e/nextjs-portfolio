/* eslint-disable @next/next/no-img-element */

import React from 'react'
import styles from '@/styles/logoImg.module.scss'

export default function LogoImg() {
  return (
    <div className={styles.imgContainer}>
      <img src="images/text.gif" alt="logo-name" className={styles.imgForeground} />
      <img src="images/gear.gif" alt="logo-gear" className={styles.imgBackground} />
    </div>
  )
}
