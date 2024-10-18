import React, { useEffect, useState } from "react";
import { Layout, Img, Tag, Tags, Text, TextBox, Title, Subtitle, TwoColumn, TestimonialText, TestimonialImg } from "@/components";
import { useRouter } from "next/router";
import projectData from "@/data/projects.js";
import projectDefaultImg from "@/assets/project.jpg";
import { findTestimonial } from "@/utils/findTestimonial";

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
                <>
                  <TextBox key={index}>
                    <TwoColumn
                      column1={
                        <>
                          <TestimonialImg testimonial={testimonial} whenToShow={'hideOnMobile'}/>
                          <TestimonialText testimonial={testimonial} whenToShow={'hideOnDesktop'}/>
                        </>
                    }
                      column2={
                        <>
                          <TestimonialText testimonial={testimonial} whenToShow={'hideOnMobile'}/>
                          <TestimonialImg testimonial={testimonial}  whenToShow={'hideOnDesktop'}/>
                        </>
                      }
                    />
                  </TextBox>
                  {index < testimonialData.length - 1 && <><br /><br /></>}
               </>
              )
            )}
          </>
        }
        column2={
          <>
            <Img src={project?.img ? project?.img : projectDefaultImg} alt={project?.title} width={'350px'}/>
            <Tags data={project?.tags} />
          </>
        }
      />
    </Layout>
  );
}