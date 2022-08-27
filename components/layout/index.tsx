import React from "react";
import { ReactNode, FC } from "react";

type Props = { children: ReactNode };
import Footer from "./footer";
import Header from "./header";

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="lg:px-36 lg:py-4 p-10 bg-att_black">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
