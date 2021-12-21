import { Provider } from "next-auth/client";
import { TmdbProvider } from "../context/TmdbContext";
import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <Provider session={pageProps.session}>
      <TmdbProvider>
        {loading && <Loader />}
        <Component {...pageProps} />
      </TmdbProvider>
    </Provider>
  );
}

export default MyApp;
