import { AppProps } from "next/app";
import "../styles/styles.css";
import "../styles/All.module.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
