import {AppProps} from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../../styles/globals.css';
import { colors } from '../../styles/themeChakra';
import { Toaster } from 'react-hot-toast';

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
            <Toaster position="bottom-right" />
        </ChakraProvider>

  );
}

export default MyApp;