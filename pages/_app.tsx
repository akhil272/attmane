import Layout from "../components/layout/index";
import { AppProps } from "../node_modules/next/app";
import "../styles/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
