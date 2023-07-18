import React from "react";
import Header from "./components/header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}
