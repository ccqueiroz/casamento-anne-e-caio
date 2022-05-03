import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render() {
        return(
            <Html lang="pt-br">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180"/>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    <link rel="canonical" href="https://www.casamentoanneecaio.com"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`} defer />
                </body>
            </Html>
        )
    };
}