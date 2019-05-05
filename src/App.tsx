import React from 'react'
import FlashMessages from 'modules/flash'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Loader from 'components/Loader'
import Router from 'Router'
import Suspense from 'experimental/Suspense'

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
