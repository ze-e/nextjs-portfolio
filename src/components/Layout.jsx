import React from 'react'
import {Nav, Footer} from "@/components"
import styles from "@/styles/layout.module.scss"
export default function Layout({backNav = false, children}) {
  return (
    <div className={styles.container}>
      <Nav backNav={backNav} />
      <main className={styles.body}>{children}</main>
      <Footer />
    </div>
    )
}
