import "../styles/globals.scss";
import type { AppProps } from "next/app";
import RootLayout from "./root_layout";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
