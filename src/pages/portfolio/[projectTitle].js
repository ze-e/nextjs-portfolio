import React from "react";
import { Layout, Img, Tag, Tags } from "@/components";
import { useRouter } from "next/router";
import projectData from "@/data/projects.js";

export default function Project() {
  const router = useRouter();
  const projectTitle = router.query.projectTitle;
  const project = projectData.find((p) => (p.title = projectTitle));

  return (
    <Layout backNav={true}>
      <main className={"twoColumn"}>
        <div className={"column-1"}>
          <h2 className={"title"}>{project?.title}</h2>
          <p className={"text"}>
            {project?.description ? project?.description : project?.blurb}
          </p>
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
        </div>
        <div className={"column-2"}>
          <Img src={project?.img} alt={project?.title} />
          <Tags data={project?.tags} />
        </div>
      </main>
    </Layout>
  );
}
