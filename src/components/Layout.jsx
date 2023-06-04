import React from 'react'
import {Nav, Footer} from "@/components"

export default function Layout({backNav = false, children}) {
  return (
    <>
      <Nav backNav={backNav} />
      <main>{children}</main>
      <Footer />
    </>
    )
}
