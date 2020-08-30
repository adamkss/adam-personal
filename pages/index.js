import Head from 'next/head';

import styles from 'styles/index.module.scss';
import { Header } from 'components/header';

const Home = () => {
  return (
    <>
      <Head>
        <title>Adam Kiss | Home</title>
      </Head>
      <span>Home here</span>
    </>
  );
};

Home.showHeader = true;
Home.pageName = 'home';

export default Home;
