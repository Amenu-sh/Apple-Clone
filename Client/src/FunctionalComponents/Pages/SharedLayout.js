import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import MyHeader from '../Header/MyHeader'

function SharedLayout() {
  return (
      <>
          <Header />
          <Outlet />
          <Footer />
    </>
  )
}

export default SharedLayout