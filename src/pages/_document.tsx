import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render() {
        return(
            <Html lang="pt-br">
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <link rel="shortcut icon" href="images/casal.png" type="images/png" />
                    <script
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBC8TEKvLAQ0hdWi3E84WrxjqN57yBVFT8"
                        defer
                    >
                    </script>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    };
}