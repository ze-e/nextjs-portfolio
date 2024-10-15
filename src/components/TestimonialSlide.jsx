import React from 'react';
import styles from "@/styles/testimonialslide.module.scss";
import { eduVicWaNtBeginner } from "@/utils/fonts";
import Image from 'next/image';

export default function TestimonialSlide({data}) {
  return data && (
    <div className={`${styles.container} ${eduVicWaNtBeginner.variable}`}>
      <div className={styles.quoteContainer}>
      <div className={styles.quote}>
          {data?.testimonial}
          <div className={styles.attribution}>
            {" "}--{" "}{data?.name}<br/>
            {" "}{data?.position}{" "}<br/>
            {" "}{data?.company}{" "}
          </div>
      </div>
      <div className={styles.image}>
        {data?.img && (<Image src={data.img} alt={data.name} />)}
      </div>
      </div>
    </div>
  );
}
