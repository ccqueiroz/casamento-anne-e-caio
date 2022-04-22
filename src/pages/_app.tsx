import {AppProps} from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../../styles/globals.css';
import { colors } from '../../styles/themeChakra';

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps}/>
        </ChakraProvider>

  );
}

export default MyApp;