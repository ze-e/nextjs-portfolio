import React from 'react'
import styles from "@/styles/paymentCard.module.scss"
import Image from 'next/image'
export default function PaymentCard({data}) {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} src={data.img} alt={data.title} />
      <br/>
      <br/>
      {data.content.map(i => 
        <>
          <p className={styles.content}>{i}</p>
          <br/>
        </>
      )}
      <p className={styles.oldPrice}><em><s>{data.oldPrice}{" "}Regular Price</s></em></p>
      <br/>
      <br/>
      <p className={styles.newPrice}>{data.newPrice}{" "} DISCOUNT Price</p>
    </div>
    )
}
