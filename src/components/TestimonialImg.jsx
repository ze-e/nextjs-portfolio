import React from 'react'
import styles from "@/styles/testimonialComponents.module.scss"
import { Img } from "@/components";

export default function TestimonialImg({testimonial, whenToShow}) {
  return (
    <div className={`${whenToShow === "hideOnMobile" ? styles.hideOnMobile : styles.hideOnDesktop}`}>
      <Img src={testimonial?.img} alt={testimonial?.title} width={'300px'}/>
    </div>
    )
}
