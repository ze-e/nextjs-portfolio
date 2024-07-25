import React from 'react'
import styles from "@/styles/Services.module.scss"
import service_list from "@/data/service_list"

export default function Services() {

  const StrongText = ({children}) => <p className={styles.strongText}><em><strong>{children}</strong></em></p>

  return (
    <div className={styles.container}>
      <StrongText>We Offer...{" "}{" "}{" "}</StrongText>
      <br/>
      <ul className={styles.service_list}>
        {service_list.map(i => 
          <li className={styles.service} key={i}>{i}</li>
        )}
      </ul>
      <br/>
      <StrongText>...and more!</StrongText>
   </div>
    )
}
