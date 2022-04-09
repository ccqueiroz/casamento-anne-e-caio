import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render() {
        return(
            <Html lang="pt-br">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <link rel="shortcut icon" href="images/casal.png" type="image/png" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    };
}