import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";
import {makeStyles} from "@material-ui/core";

const queryClient = new QueryClient();

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        margin: '0 auto'
    }
})

export default function MyApp({ Component, pageProps }: AppProps) {
    const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      (jssStyles as any).parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <React.Fragment>
        <Head>
          <title>Blog example - Next.js</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <div className={classes.root}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </QueryClientProvider>
      </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};