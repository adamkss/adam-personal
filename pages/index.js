import Head from 'next/head';
import Link from 'next/link';

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
        <section
          className={getClassNames({
            className: 'introduction',
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
              I am a <b>Full Stack</b> Software Engineer who loves to write
              about cool things.
            </span>
            <div
              className={getClassNames({
                className: 'welcome__newsletter',
              })}
            >
              <span>
                If you'd like, you can subscribe to my{' '}
                <strong>
                  <Link href="/newsletter">
                    <a>newsletter</a>
                  </Link>
                </strong>
                .
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

Home.showHeader = true;
Home.pageName = 'home';

export default Home;
