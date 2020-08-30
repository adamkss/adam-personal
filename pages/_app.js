import Head from 'next/head';
import { useState, useCallback, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import 'normalize.css';
import 'styles/global.scss';
import { Header } from 'components/header';

function App({ Component, pageProps }) {
  const [haveStyleAssetsLoaded, setHaveStyleAssetsLoaded] = useState(false);

  const setUpInterFontObserver = useCallback(async () => {
    const interFontObserver = new FontFaceObserver('Inter');
    await interFontObserver.load();
    setHaveStyleAssetsLoaded(true);
  }, []);

  useEffect(() => {
    setUpInterFontObserver();
  }, [setUpInterFontObserver]);

  const showHeader = Component.showHeader || false;
  const currentPage = Component.pageName || 'home';

  return (
    <>
      <Head>
        <title>Adam Kiss | Personal</title>
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
        `}
      </style>
    </>
  );
}

export default App;
