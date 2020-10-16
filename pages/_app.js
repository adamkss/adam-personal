import Head from 'next/head';
import { useState, useCallback, useEffect } from 'react';

import 'normalize.css';
import 'styles/global.scss';
import { Header } from 'components/header';

function App({ Component, pageProps }) {
  const showHeader = Component.showHeader || false;
  const currentPage = Component.pageName || 'home';

  return (
    <>
      <Head>
        <title>Adam Kiss | Personal</title>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="wrapper">
        {showHeader && <Header currentPage={currentPage} />}
        <Component {...pageProps} />
      </div>

      <style jsx>
        {`
          .wrapper {
            padding: ${showHeader ? '2em' : '0em'};
          }
          .loading-wrapper {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: white;
            z-index: 9999;
          }
        `}
      </style>
    </>
  );
}

export default App;
