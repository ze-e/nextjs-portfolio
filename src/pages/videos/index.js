import React from 'react'
import { Layout, Grid } from "@/components";
import videoData from "@/data/videos.js";
export default function index() {
  return (
    <Layout>
      <Grid items={videoData} type="video"/>
    </Layout>
  );
}
