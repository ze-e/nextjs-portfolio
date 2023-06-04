import React from "react";
import { Layout } from "@/components";
import { useRouter } from "next/router";
import projectData from "@/data/projects.json";

export default function Project() {
  const router = useRouter();
  const projectTitle = router.query.projectTitle;
  const project = projectData.find((p) => (p.title = projectTitle));

  return (
    <Layout backNav={true}>
      <div>{project?.title}</div>
    </Layout>
  );
}
