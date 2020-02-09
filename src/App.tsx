import React from 'react'
import { FlashMessages } from 'modules/flash'
import { Layout } from 'components/Layout'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Loader } from 'components/Loader'
import { Routes } from 'Routes'
import { Suspense } from 'experimental/Suspense'

export const App = () => (
  <Layout>
    <FlashMessages />
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
    <Footer />
  </Layout>
)
