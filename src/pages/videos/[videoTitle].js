import React from "react";
import { Layout,  Tags, Subtitle, Video, TextBox } from "@/components";
import { useRouter } from "next/router";
import videoData from "@/data/videos.js";

export default function Project() {
  const router = useRouter();
  const videoTitle = router.query.videoTitle;
  const video = videoData.find((v) => (v.title === videoTitle));

  return (
    <Layout backNav={true}>
      <TextBox>
        <Subtitle>{video?.title}</Subtitle>
      </TextBox>
      <Video src={video?.link} title={video?.title } />
      <Tags data={video?.tags} />
    </Layout>
  );
}
