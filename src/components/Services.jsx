import React from 'react'
import styles from "@/styles/Services.module.scss"
import service_list from "@/data/service_list"

export default function Services() {

  const StrongText = ({children}) => <p><em><strong>{children}</strong></em></p>

  return (
    <div className={styles.container}>
      <StrongText>We Offer...</StrongText>
      <br/>
      <ul className={styles.service_list}>
        {service_list.map(i => 
          <li className={styles.service}>{i}</li>
        )}
      </ul>
      <StrongText>...and more</StrongText>
      <br/>
      <StrongText>Contact us at <a href='mailto:zrexwebdev@gmail.com'>zrexwebdev@gmail.com</a> for a free one-on-one consultation​</StrongText>
    </div>
    )
}
