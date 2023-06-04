import React from 'react'
import Link from "next/link";
import style from '@/styles/nav.module.scss';
import { useRouter } from 'next/router';

export default function Nav({ backNav }) {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div>
        {!backNav ? <ul className={style.navItems}>
          <li className={style.navItem} ><Link className={style.link} href="/" activeClassName={style.isActive}>Home</Link>|</li>
          <li className={style.navItem} ><Link className={style.link} href="/portfolio" activeClassName={style.isActive}>Portfolio</Link>|</li>
          <li className={style.navItem} ><Link className={style.link} href="/videos" activeClassName={style.isActive}>Videos</Link>|</li>
          <li className={style.navItem} ><Link className={style.link} href="/testimonials" activeClassName={style.isActive}>Testimonials</Link></li>
        </ul> :
        <button className={style.backButton} type="button" onClick={() => router.back()}>
          {"<"}
        </button>}
      </div>
    </div>  )
}
