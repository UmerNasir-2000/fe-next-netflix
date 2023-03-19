import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          primary: ["#E50914", " #B00710"],
          secondary: ["#303030", " #000000"],
          white: ["#FFFFFF", " #F5F5F5"],
        },
        fontFamily: "Nunito Sans, sans-serif",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
