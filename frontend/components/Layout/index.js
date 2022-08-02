import React from 'react'
import Footer from './footer'
import NavBar from './navbar'

const Layout = ({ children }) => {
  return (
        <>
            <NavBar>
            </NavBar>
            {children}
            <Footer>
            </Footer>
        </>
  )
}

export default Layout
