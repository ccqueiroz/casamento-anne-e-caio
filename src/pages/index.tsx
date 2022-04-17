import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout'
import { Main } from '../components/Main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Main>
        <Layout />
      </Main>
    </>
  )
}

export default Home
