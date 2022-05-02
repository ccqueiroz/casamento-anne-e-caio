import {AppProps} from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../../styles/globals.css';
import { colors } from '../../styles/themeChakra';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import '../../public/NprogressCSS/index.css';

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
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

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
            <Toaster position="bottom-right" />
        </ChakraProvider>

  );
}

export default MyApp;