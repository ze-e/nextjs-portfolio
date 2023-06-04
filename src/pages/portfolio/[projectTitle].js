import React from "react";
import { Layout, Img } from "@/components";
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
          <h2 className={"title"}>
            {project?.title}
          </h2>
          <p className={'text'}>
            {project?.description ? project?.description : project?.blurb}
          </p>
        </div>
        <div className={"column-2"}>
          <Img src={project?.img} alt={project?.title} />
        </div>
      </main>
    </Layout>
  );
}
