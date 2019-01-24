import React from 'react'
import FlashMessages from 'src/modules/flash'
import Layout from 'src/components/Layout'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Loader from 'src/components/Loader'
import Router from 'src/Router'
import Suspense from 'src/experimental/Suspense'

const App = () => (
  <Layout>
    <FlashMessages />
    <Header />
    <Suspense fallback={<Loader />}>
      <Router />
    </Suspense>
    <Footer />
  </Layout>
)

export default App
