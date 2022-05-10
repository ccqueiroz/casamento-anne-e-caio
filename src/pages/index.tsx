import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { memo } from 'react'
import { Layout } from '../components/Layout'
import { Main } from '../components/Main'

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#d6eef5" />
        <meta name="google-signin-client_id" content={process.env.GOOGLE_CLIENT_ID} />
        {/* meta theme-color para safari */}
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <title>Anne&Caio</title>
        <meta name="description" content="Bem-vindos ao nosso site de casamento. Criamos esse espaço para compartilhar com vocês os detalhes da nossa cerimônia e recepção desse momento tão especial. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"/>
        <meta name="keywords"
          content="casamento em Iparana, casamento na praia do Pacheco, casamento no espaço Atlântis, buffet, buffet Atlântis, caio, caio cezar, caio cezar guedes de queiroz, anne, anne caroline, anne caroline oliveira lima, anne caroline oliveira lima de queiroz, casal, praia, Queiroz, pix, site de casamento, confirme sua presença, Atlântis Buffet, cola no pix, dress code, recepção buffet Atlântis, noivo, noiva, noivos"
        />
        <meta name="author" content="Caio Queiroz e Anne Queiroz" />
        <meta name="mobile-web-app-capable" content="yes"/>
        {/* open_graph - facebook */}
        <meta property="og:title" content="anne e caio." />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Bem-vindos ao nosso site de casamento. Criamos esse espaço para compartilhar com vocês os detalhes da nossa cerimônia e recepção desse momento tão especial. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"/>
        <meta property="og:url" content="https://www.casamentoanneecaio.com" />
        <meta property="og:site_name" content="casamento anne e caio." />
        <meta property="og:image" content="https://next-casamentoecaio.s3.amazonaws.com/image-site/sitemapimagecasamentoanneecaio.png" />
        <meta property="og:image:secure_url" itemProp="image" content="https://next-casamentoecaio.s3.amazonaws.com/image-site/sitemapimagecasamentoanneecaio.png"/>
        <meta property="og:image:alt" content="Site de casamento Anne e Caio" />
        <meta property="og:image:width" content="1256" />
        <meta property="og:image:height" content="815" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="pt_BR" />
        {/* open_graph - facebook */}
        <meta name="twitter:cards" content="sumary" />
        <meta name="twitter:url" content="https://www.casamentoanneecaio.com" />
        <meta name="twitter:title" content="anne e caio." />
        <meta name="twitter:description" content="Bem-vindos ao nosso site de casamento. Criamos esse espaço para compartilhar com vocês os detalhes da nossa cerimônia e recepção desse momento tão especial. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"/>
        <meta name="twitter:url" content="https://www.casamentoanneecaio.com" />
        <meta name="twitter:image" content="https://next-casamentoecaio.s3.amazonaws.com/image-site/sitemapimagecasamentoanneecaio.png" />
        <meta name="twitter:image:width" content="1256" />
        <meta name="twitter:image:height" content="815" /> 
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:site" content="@caiocezardeque1" />
        <meta name="twitter:creator" content="@caiocezardeque1"/>
      </Head>
      <Main>
          <Layout />
      </Main>
    </>
  )
}

export default memo(Home);

export const getStaticProps: GetStaticProps = async () => {
  return { 
    props: {},
    revalidate: 60 * 60 * 24 * 2 //48 horas
   }
}

