import React from "react";
import { Layout, Img, Tag, Tags } from "@/components";
import { useRouter } from "next/router";
import projectData from "@/data/projects.js";
import Link from "next/link";

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
          {!!project?.link && (
            <Link href={project?.link}>
              <Tag tag={"Live Site"} />
            </Link>
          )}
          {!!project?.repo && (
            <Link href={project?.repo}>
              <Tag tag={"Repo"} />
            </Link>
          )}
        </div>
        <div className={"column-2"}>
          <Img src={project?.img} alt={project?.title} />
          <Tags data={project?.tags} />
        </div>
      </main>
    </Layout>
  );
}
