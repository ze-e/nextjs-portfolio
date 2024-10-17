import React, { useEffect, useState } from "react";
import { Layout, Img, Tag, Tags, Text, TextBox, Title, Subtitle, TwoColumn, HideOnMobile, HideOnDesktop } from "@/components";
import { useRouter } from "next/router";
import projectData from "@/data/projects.js";
import projectDefaultImg from "@/assets/project.jpg";
import { findTestimonial } from "@/utils/findTestimonial";
import Image from 'next/image';

export default function Project() {
  const [testimonialData, setTestimonialData] = useState(null);
  const router = useRouter();
  const projectTitle = router.query.projectTitle;
  const project = projectData.find((p) => (p.title === projectTitle));

  useEffect(() => {
    const fetchTestimonialData = () => {
      const testimonial_data = findTestimonial(project?.company);
      setTestimonialData(testimonial_data); 
    };

    fetchTestimonialData(); 
  }, [project]); 

  const TestimonialImg = ({testimonial}) => (
    <Img src={testimonial?.img} alt={testimonial?.title} width={'300px'}/>
  )

  const TestimonialText = ({testimonial}) => (
    <TextBox>
      <Title>{testimonial?.name}</Title>
      <Subtitle>{testimonial?.position}</Subtitle>
      <Text>&quot;{testimonial?.long_version ? testimonial.long_version : testimonial?.testimonial}&quot;</Text>
    </TextBox>
  )

  return (
    <Layout backNav={true}>
      <TwoColumn
        column1={
          <>
            <TextBox>
              <Title>{project?.title}</Title>
              {/* <Subtitle>{project?.blurb}</Subtitle> */}
              <Text>{project?.description}</Text>
            </TextBox>
            <Tags>
              {!!project?.link && (
                <a href={project?.link} target="_blank">
                  <Tag tag={"Live Site"} />
                </a>
              )}
              {/* {!!project?.repo && (
                <a href={project?.repo} target="_blank">
                  <Tag tag={"Repo"} />
                </a>
              )} */}
            </Tags>
            <br/>
            <br/>
            {testimonialData &&
              testimonialData.map((testimonial, index)=>(
              <TextBox key={index}>
                <TwoColumn
                  column1={
                    <>
                      <HideOnMobile>
                        <TestimonialImg testimonial={testimonial}/>
                      </HideOnMobile>
                      <HideOnDesktop>
                        <TestimonialText testimonial={testimonial}/>
                      </HideOnDesktop>
                    </>
                  }
                  column2={
                    <>
                      <HideOnMobile>
                        <TestimonialText testimonial={testimonial}/>
                      </HideOnMobile>
                      <HideOnDesktop>
                        <TestimonialImg testimonial={testimonial}/>
                      </HideOnDesktop>
                    </>
                  }
                />
              </TextBox>))
            }
          </>
        }
        column2={
          <>
            <Img src={project?.img ? project?.img : projectDefaultImg} alt={project?.title} width={'200px'}/>
            <Tags data={project?.tags} />
          </>
        }
      />
    </Layout>
  );
}