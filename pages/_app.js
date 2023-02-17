import "../styles/globals.css";
import Layout from "../components/Layout";
import { StateContext } from "../pagecontext/PageState";
import { Toaster } from "react-hot-toast";
import { Roboto } from "@next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </StateContext>
  );
}

export default MyApp;
