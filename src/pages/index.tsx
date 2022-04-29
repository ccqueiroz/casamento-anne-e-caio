import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { Main } from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#d6eef5" />
        <title>AnneECaio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Main>
          <Layout />
      </Main>
    </>
  )
}

export default Home

