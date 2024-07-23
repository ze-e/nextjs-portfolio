import React from 'react';
import { Layout, LogoImg, TextBox, Text, Title, TwoColumn, Divider, Grid } from '@/components';

import services from '@/data/services'
// eslint-disable-next-line
export default function index() {
  return (
    <Layout>
      <section className="anchor" id="Home" style={{marginTop: "100px"}}>
      <TwoColumn column_1_size={2} column_2_size={1} column1={
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
        <section className="anchor" id="What We Do">
          <Divider height={"10px"} background={"#000"}/>
        <TwoColumn column1={
          <Grid items={services} type="text" orientation="v" />
        }
        column2={
          <div style={{position: "sticky", top: 100}}>
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
          </div>
        } />
        </section>
    </Layout>
  );
}
