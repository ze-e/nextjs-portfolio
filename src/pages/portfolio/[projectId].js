import { Layout } from '@/components'
import React from 'react'
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const projectId = router.query.projectId;

  return (
    <Layout backNav={true}>
      <div>{projectId}</div>
    </Layout>
  )
}
