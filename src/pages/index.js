import React from 'react';
import { Layout, LogoImg, TextBox, Text, Title, TwoColumn, Divider, Grid, Margin, PaymentCard, Services, ContactForm } from '@/components';

import video from '@/assets/movie.mp4';
import services from '@/data/services';
import paymentInfo from '@/data/paymentInfo';
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
            <Divider height={"10px"}/>
          <TwoColumn column_1_maxW={"490px"}  column1={
            <Grid items={services} type="text" orientation="v" />
          }
          column2={
            <section className="anchor" id="What We Do" style={{position: "sticky", top: 100}}>
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
            </section>
          } />
        <Divider height={"20px"}/>
      </Margin>
        <div className='overlay' style={{position:"relative", height:"300px"}}>
          <Title style={{
            position:"absolute", 
            top:"50%", 
            left:"50%", 
            transform: "translate(-50%, -50%)", 
            width:"100%", 
            height:"100%", 
            margin: 0, 
            zIndex: 2, 
            color:"white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
            }}>
              Get Started with Us Today
          </Title>
          <video
            autoPlay
            muted
            preload="auto"
            playsInline
            loop
            crossOrigin="anonymous"
            style={{
              height: "100%",
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
        </div>  
        <section className="anchor" id="Services" >
          <Margin>
            <TextBox style={{display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column", background:"linear-gradient( #00262D, rgba(29, 145, 135, 0.6)"}}>
              <Title style={{
                color:"#F04AED",
                }}>
                  Services & Prices
              </Title>
              <Text style={{color: "white"}}>
                Choose the payment method that makes sense for your business&apos;s budget<br/>
                <strong><em>For a limited time, we are offering &quot;early bird&quot; discounted prices on ALL our services!</em></strong>
              </Text>
              <Services />
              <Divider height={"20px"}/>
              <div style={{display:"flex", flexWrap:"wrap", gap:"4px"}}>
                {paymentInfo.map(i =>
                  <PaymentCard data={i} key={i}/>
                )}
              </div>
              <div style={{alignSelf: "end", color: "white"}}><small><em>* Price may vary by project scope</em></small></div>
            </TextBox>
            <Divider height={"20px"}/>
            <section className="anchor button" id="Contact">
              <TextBox style={{maxWidth: "30%", margin: "0 auto"}}>
                <ContactForm />
              </TextBox>
            </section>

          </Margin>
        </section>
    </Layout>
  );
}
