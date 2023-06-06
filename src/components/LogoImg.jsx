import React from 'react'
import styles from '@/styles/logoImg.module.scss'

import gearImg from "@/assets/gear.gif";
import textImg from "@/assets/text-2.gif";
import Image from 'next/image';

export default function LogoImg() {
  return (
    <div className={styles.imgContainer}>
      <Image src={textImg} alt="logo" className={styles.imgForeground} />
      <Image src={gearImg} alt="logo" className={styles.imgBackground} />
    </div>
  )
}
