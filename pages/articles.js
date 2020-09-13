import Head from 'next/head';

import styles from 'styles/about-me.module.scss';
import { Header } from 'components/header';

const Articles = () => {
  return (
    <>
      <Head>
        <title>Adam Kiss | Articles</title>
      </Head>
      <span>Articles here</span>
    </>
  );
};

Articles.showHeader = true;
Articles.pageName = 'articles';

export default Articles;
