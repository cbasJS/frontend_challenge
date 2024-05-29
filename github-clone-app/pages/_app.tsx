import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AppStoreProvider } from "@/application/providers/store.provider";
import "../app/globals.css";
import ReactQueryProvider from "@/application/providers/reactQuery.provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const Wrapped: React.FC<Props> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AppStoreProvider>
        <main className={inter.className}>{children}</main>
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
