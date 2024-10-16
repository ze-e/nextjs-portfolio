import React from "react";
import { Layout, Img, Tag, Tags, Text, TextBox, Title, Subtitle, TwoColumn } from "@/components";
import { useRouter } from "next/router";
import projectData from "@/data/projects.js";
import projectDefaultImg from "@/assets/project.jpg";

export default function Project() {
  const router = useRouter();
  const projectTitle = router.query.projectTitle;
  const project = projectData.find((p) => (p.title === projectTitle));

  return (
    <Layout backNav={true}>
      <TwoColumn
        className="projectItem"
        column1={
          <>
            <TextBox>
              <Title>{project?.title}</Title>
              <Subtitle>{project?.blurb}</Subtitle>
              <Text>{project?.description}</Text>
            </TextBox>
            <Tags>
              {!!project?.link && (
                <a href={project?.link} target="_blank">
                  <Tag tag={"Live Site"} />
                </a>
              )}
              {!!project?.repo && (
                <a href={project?.repo} target="_blank">
                  <Tag tag={"Repo"} />
                </a>
              )}
            </Tags>
          </>
        }
        column2={
          <>
            <Img src={project?.img ? project?.img : projectDefaultImg} alt={project?.title} />
            <Tags data={project?.tags} />
          </>
        }
      />
    </Layout>
  );
}