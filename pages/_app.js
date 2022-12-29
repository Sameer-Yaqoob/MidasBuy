import React, { useEffect } from "react";
import App from 'next/app'
import theme from "./components/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./components/fonts";
import { Provider } from 'react-redux'
import withReduxSaga from 'next-redux-saga'
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from '../data/redux/store'
import withRedux from "next-redux-wrapper";
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
function MyApp({pageProps, Component,store}) {
        return (
            <ChakraProvider theme={theme}>
                <Fonts />
                <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} /> 
                </PersistGate>
            </ChakraProvider>
        );
      }   
const makeWrapper =()=> store
export default withRedux(makeWrapper)(withReduxSaga(MyApp));
