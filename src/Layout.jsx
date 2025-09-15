import React from 'react'
// by using this from router dom and by declaring this you can use some terms
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
