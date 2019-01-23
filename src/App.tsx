import React from 'react'
import FlashMessages from 'src/modules/flash'
import Layout from 'src/components/Layout'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Router from 'src/Router'

const App = () => (
  <Layout>
    <FlashMessages />
    <Header />
    <Router />
    <Footer />
  </Layout>
)

export default App
