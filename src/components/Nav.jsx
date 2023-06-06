import React from 'react'
import Link from "next/link";
import styles from '@/styles/nav.module.scss';
import { useRouter } from 'next/router';
import { inconsolata } from "@/utils/fonts";

export default function Nav({ backNav }) {
  const router = useRouter();

  const NavLink = ({ ...props }) => {
    return (
      <Link {...props}>
        <a className={router.pathname == props.href ? styles.isActive : ""}>
          {props.children}
        </a>
      </Link>
    )
  }

  return (
    <div className={styles.container}>
      {!backNav ? <ul className={styles.navItems}>
        <li className={styles.navItem} ><NavLink className={styles.link} href="/" >Home</NavLink></li>
        <li className={styles.navItem} >|<NavLink className={styles.link} href="/portfolio" >Portfolio</NavLink></li>
        {/* <li className={styles.navItem} >|<NavLink className={styles.link} href="/videos" >Videos</NavLink></li> */}
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
