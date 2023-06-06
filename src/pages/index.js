import React from 'react';
import { Layout, LogoImg, TextBox, Text, Title, TwoColumn } from '@/components';

// eslint-disable-next-line
export default function index() {
  return (
    <Layout>
      <TwoColumn column1={
          <TextBox>
            <Title>
              Transform Your Ideas into Digital Reality!
            </Title>
            <Text>
              At ZRR Web Dev, we{"'"}re passionate about crafting immersive web
              experiences that captivate your audience. With our expertise in
              fullstack web development, we bring your ideas to life and deliver
              seamless, high-performing websites and web applications. From
              dynamic e-commerce platforms to intuitive user interfaces, our
              team of skilled developers and designers work tirelessly to create
              pixel-perfect solutions that elevate your online presence. We
              pride ourselves on our attention to detail, user-centric approach,
              and commitment to delivering projects on time and within budget.
              Unlock the full potential of your business with ZRR Web Dev. Let
              us help you make an impact in the digital world with stunning
              websites and powerful web applications that leave a lasting
              impression.
            </Text>
          </TextBox>
      }
        column2={
          <LogoImg />
        } />
    </Layout>
  );
}
