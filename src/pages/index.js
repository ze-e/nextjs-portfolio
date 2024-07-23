import React from 'react';
import { Layout, LogoImg, TextBox, Text, Title, TwoColumn, Divider, Grid, Margin } from '@/components';

import video from '@/assets/movie.mp4';
import services from '@/data/services';
// eslint-disable-next-line
export default function index() {
  return (
    <Layout>
      <Margin>
        <section className="anchor" id="Home" style={{marginTop: "100px"}}>
        <TwoColumn column_1_flex={2} column_2_flex={1} column1={
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
          <TwoColumn column_1_maxW={"490px"}  column1={
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
            <Divider height={"20px"} background={"#000"}/>
      </Margin>
        <div style={{position:"relative"}}>
          <video
            autoPlay
            muted
            preload="auto"
            playsInline
            loop
            crossOrigin="anonymous"
            style={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              opacity: 1,
              position:"absolute",
              top:0,
              left:0,
              zIndex: 1
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Title style={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", width:"100%", height:"100%", zIndex: "2"}}>Get Started with Us Today</Title>
        </div>  
    </Layout>
  );
}
