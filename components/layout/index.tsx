import Head from "next/head";
import React from "react";
import { ReactNode, FC } from "react";

type Props = { children: ReactNode };
import Footer from "./footer";
import Header from "./header";

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />
      </Head>
      <Header />
      <div className="lg:px-36 lg:py-4 p-10 bg-att_black">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
