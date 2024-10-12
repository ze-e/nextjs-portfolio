import React from 'react';
import styles from "@/styles/testimonials.module.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { TestimonialSlide } from '.';
import '@splidejs/react-splide/css';

import { testimonial_data } from '@/data/testimonials'; 


export default function Testimonials({...props}) {
  return (
    <div className={styles.container}>
      <Splide 
        aria-label="Testimonials"
        options={{
          perPage: 2,
          breakpoints: {
            640: {
              perPage: 1,
            },
          },
          padding: { left: '20px', right: '20px' },  
        }}
      >
        {testimonial_data?.length && (
          testimonial_data.map((t, i) => (
            <SplideSlide key={i} style={{color: 'white'}}>
              <TestimonialSlide data={t} />
            </SplideSlide>
          ))
        )}
      </Splide>
    </div>
  );
}
