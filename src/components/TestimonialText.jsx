import React from 'react'
import styles from "@/styles/testimonialComponents.module.scss"
import {  Text, TextBox, Title, Subtitle } from "@/components";

export default function TestimonialText({testimonial, whenToShow}) {
  return (
    <div className={`${whenToShow === "hideOnMobile" ? styles.hideOnMobile : styles.hideOnDesktop}`}>
      <TextBox>
        <Title>{testimonial?.name}</Title>
        <Subtitle>{testimonial?.position}</Subtitle>
        <Text>&quot;{testimonial?.long_version ? testimonial.long_version : testimonial?.testimonial}&quot;</Text>
      </TextBox>
    </div>
    )
}
