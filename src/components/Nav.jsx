import React from 'react'
import Link from "next/link";
import style from '@/styles/nav.module.scss';
import { useRouter } from 'next/router';
import { inconsolata } from "@/utils/fonts";

export default function Nav({ backNav }) {
  const router = useRouter();

  const NavLink = ({ ...props }) => {
    return (
      <Link {...props}>
        <a className={router.pathname == props.href ? style.isActive : ""}>
          {props.children}
        </a>
      </Link>
    )
  }

  return (
    <div className={style.container}>
      {!backNav ? <ul className={style.navItems}>
        <li className={style.navItem} ><NavLink className={style.link} href="/" >Home</NavLink>|</li>
        <li className={style.navItem} ><NavLink className={style.link} href="/portfolio" >Portfolio</NavLink></li>
      </ul> :
      <div className={style.navItems}>
        <button className={`${inconsolata.className} ${style.backButton}`} type="button" onClick={() => router.back()}>
          {"< Back"}
        </button>
      </div>
      }
    </div>
  )
}
