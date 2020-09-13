import Head from 'next/head';

import styles from 'styles/about-me.module.scss';
import { Header } from 'components/header';

const Newsletter = () => {
  return (
    <>
      <Head>
        <title>Adam Kiss | Newsletter</title>
      </Head>
      <span>Newsletter here</span>
    </>
  );
};

Newsletter.showHeader = true;
Newsletter.pageName = 'newsletter';

export default Newsletter;
