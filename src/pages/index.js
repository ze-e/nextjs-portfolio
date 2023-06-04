import React from 'react';
import { Layout } from '@/components';
import styles from '@/styles/home.module.scss'

import gearImg from "@/assets/gear.gif";
import textImg from "@/assets/text.gif";
import Image from 'next/image';

export default function Home() {

  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.column1}>
          <h2 className={styles.header}>
            Transform Your Ideas into Digital Reality!
          </h2>
          <p className={styles.text}>
            At ZRR Web Dev, we{"'"}re passionate about crafting immersive web
            experiences that captivate your audience. With our expertise in
            fullstack web development, we bring your ideas to life and deliver
            seamless, high-performing websites and web applications. From
            dynamic e-commerce platforms to intuitive user interfaces, our team
            of skilled developers and designers work tirelessly to create
            pixel-perfect solutions that elevate your online presence. We pride
            ourselves on our attention to detail, user-centric approach, and
            commitment to delivering projects on time and within budget. Unlock
            the full potential of your business with ZRR Web Dev. Let us help
            you make an impact in the digital world with stunning websites and
            powerful web applications that leave a lasting impression.
          </p>
        </div>
        <div className={styles.column2}>
          <div className={styles.imgContainer}>
            <Image src={textImg} alt="logo" className={styles.imgForeground} />
            <Image src={gearImg} alt="logo" className={styles.imgBackground} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
