import "~/styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

import theme from "~/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={1500}
      >
        <Component {...pageProps} />
      </SnackbarProvider>
    </ChakraProvider>
  );
}

export default MyApp;
