import { testimonial_data } from '@/data/testimonials';

export function findTestimonial(company) {
  return testimonial_data.filter(testimonial => testimonial.company === company);
}
