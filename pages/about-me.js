import Head from 'next/head';

import styles from 'styles/about-me.module.scss';
import { Header } from 'components/header';

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>Adam Kiss | About me</title>
      </Head>
      <span>About me here</span>
    </>
  );
};

AboutMe.showHeader = true;
AboutMe.pageName = 'about-me';

export default AboutMe;
