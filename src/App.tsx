import React from 'react'
import styled from 'styled-components'
import FlashMessages from 'src/modules/flash'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Router from 'src/Router'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const App = () => (
  <Layout>
    <FlashMessages />
    <Header />
    <Router />
    <Footer />
  </Layout>
)

export default App
