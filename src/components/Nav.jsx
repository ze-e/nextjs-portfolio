import React from 'react'
import Link from "next/link";
import styles from '@/styles/nav.module.scss';
import { useRouter } from 'next/router';
import { inconsolata } from "@/utils/fonts";
import { useActiveRouter } from 'active-link-nextjs';

const config = { activeClass: styles.isActive};

export default function Nav({ backNav }) {
  const router = useRouter();
  const { registerRoute } = useActiveRouter(config);

  return (
    <div className={styles.container}>
      {!backNav ? <ul className={styles.navItems}>
        <li className={styles.navItem} ><Link className={styles.link} {...registerRoute([''])} >Home</Link></li>
        <li className={styles.navItem} ><span className={styles.pipe}>|</span><Link className={styles.link} {...registerRoute(['portfolio'])} >Portfolio</Link></li>
        <li className={styles.navItem} ><span className={styles.pipe}>|</span><Link className={styles.link} {...registerRoute(['videos'])} >Videos</Link></li>
        <li className={styles.navItem} ><span className={styles.pipe}>|</span><a className={styles.link} href="https://github.com/ze-e" target="_blank" >Github</a></li>
      </ul> :
      <div className={styles.navItems}>
        <button className={`${inconsolata.className} ${styles.backButton}`} type="button" onClick={() => router.back()}>
          {"< Back"}
        </button>
      </div>
      }
    </div>
  )
}
