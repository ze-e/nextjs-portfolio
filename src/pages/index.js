import React from 'react';
import { Layout, LogoImg, TextBox, Text, Title, TwoColumn, Divider, Grid } from '@/components';
import RoboIco from '@/assets/brand/robo-ico.png';

import '@/data/services'
import projects from '@/data/projects';
// eslint-disable-next-line
export default function index() {
  return (
    <Layout>
      <section className="anchor" id="home">
      <TwoColumn column1={
          <TextBox>
            <Title>
              Your Helpful Computer Assistant
            </Title>
            <Text>
            Empowering creativity and efficiency through innovative web development and AI automation solutions.
            </Text>
          </TextBox>
      }
        column2={
          <LogoImg/>
        } />
        </section>
        <Divider image={RoboIco} />
        <section className="anchor" id="What We Do">
        <TwoColumn column1={
          <TextBox>
            <Title>
              Innovate, Automate, Elevate
            </Title>
            <Text>
            At Rex Teq, we specialize in transforming your digital presence and automating your business processes. 
            Our services include web development, building a social media presence, expert consulting to streamline workflows and enhance efficiency, 
            and advanced AI automation solutions to create custom chatbots and applications tailored to your needs. 
            Let us help you leverage technology to drive growth and innovation in your business.
            </Text>
          </TextBox>
      }
        column2={
          <LogoImg/>
        } />
        <Grid items={projects}/>
        </section>
    </Layout>
  );
}
