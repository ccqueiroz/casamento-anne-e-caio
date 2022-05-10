import {AppProps} from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../../styles/globals.css';
import { colors } from '../../styles/themeChakra';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {SessionProvider} from 'next-auth/react';
import NProgress from 'nprogress';
import '../../public/NprogressCSS/index.css';

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps: {session, ...pageProps}}: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => NProgress.start();
        const handleStop = () => NProgress.done();

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router]);
    console.log('session My App=> ', session)
                console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_ID)
            console.log('process.env.GOOGLE_CLIENT_ID', process.env.GOOGLE_CLIENT_SECRET)
    return (
        <SessionProvider session={session}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
                <Toaster position="bottom-right" />
            </ChakraProvider>
        </SessionProvider>

  );
}

export default MyApp;