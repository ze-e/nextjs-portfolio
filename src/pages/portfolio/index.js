import React from 'react'
import Link from "next/link";
import { Layout } from "@/components";

export default function index() {
  return (
    <Layout>
      <Link href="portfolio/1">1</Link>
    </Layout>
  );
}
