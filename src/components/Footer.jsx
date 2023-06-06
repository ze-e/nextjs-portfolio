import React from 'react'
import styles from "@/styles/footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.container}>Z Rex Rodriguez ©{ new Date().getFullYear()}</div>
  )
}
