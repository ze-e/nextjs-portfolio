import React from 'react'
import { Layout, Grid } from "@/components";
import projectData from "@/data/projects.js";
export default function index() {
  return (
    <Layout>
      <Grid items={projectData} />
    </Layout>
  );
}
