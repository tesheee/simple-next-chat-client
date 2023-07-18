import React from "react";
import Header from "./components/header";

export default function RootLayout({ children }: any) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
