import React from "react";
import { ReactNode, FC } from "react";

type Props = { children: ReactNode };
import Footer from "./footer";
import Header from "./header";

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="p-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
