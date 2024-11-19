import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Footer2 from "./Footer2";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <Footer />
    <Footer2 />
  </div>
);

export default Layout;
