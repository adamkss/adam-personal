import Head from 'next/head';

import styles from 'styles/index.module.scss';
import { Header } from 'components/header';
import { ClassNameHelper } from 'utils/ClassNameHelper';

const { getClassNames } = new ClassNameHelper(styles);

const Home = () => {
  return (
    <>
      <Head>
        <title>Adam Kiss | Home</title>
      </Head>
      <main
        className={getClassNames({
          className: 'main-wrapper',
        })}
      >
        <img
          className={getClassNames({
            className: 'profile-image',
          })}
          alt="Profile picture"
          src="/profile_picture.jpg"
        />
        <div
          className={getClassNames({
            className: 'welcome-text',
          })}
        >
          <span
            className={getClassNames({
              className: 'welcome__big-text',
            })}
          >
            Hi there!
          </span>
          <span
            className={getClassNames({
              className: 'welcome__small-text',
            })}
          >
            Check out my articles until other content pops up here :)
          </span>
        </div>
      </main>
    </>
  );
};

Home.showHeader = true;
Home.pageName = 'home';

export default Home;
