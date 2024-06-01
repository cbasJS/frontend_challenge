import type { AppProps } from "next/app";
import { AppStoreProvider } from "@/application/providers/store.provider";
import ReactQueryProvider from "@/application/providers/reactQuery.provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import Layout from "@/presentation/components/layout/layout.component";

import "../app/globals.css";

type Props = {
  children: React.ReactNode;
};

const Wrapped: React.FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AppStoreProvider>
        <Layout>{children}</Layout>
      </AppStoreProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </ReactQueryProvider>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Github clone | Finsphera challange</title>
      </Head>
      <Wrapped>
        <Component {...pageProps} />
      </Wrapped>
    </>
  );
}
