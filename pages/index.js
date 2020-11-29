import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/index.module.scss';

import { Header } from 'components/header';
import { ClassNameHelper } from 'utils/ClassNameHelper';
import VerticalSpacer from 'components/atoms/VerticalSpacer';

import LinkedIn from 'illustrations/LinkedIn';
import Instagram from 'illustrations/Instagram';
import Medium from 'illustrations/Medium';

const { getClassNames } = new ClassNameHelper(styles);

const IconsColor = 'rgba(0,0,0,0.4)';
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
          <picture>
            <source
              type="image/webp"
              srcSet="/images/profile-w_360.webp 1x, 
                      /images/profile-w_518.webp 1.5x,
                      /images/profile-w_650.webp 1.8x,
                      /images/profile-w_769.webp 2x,
                      /images/profile-w_865.webp 2.5x,
                      /images/profile-w_960.webp 3x"
            ></source>
            <source
              type="image/jpeg"
              srcSet="/images/profile-w_360.jpg 1x, 
                      /images/profile-w_518.jpg 1.5x,
                      /images/profile-w_650.jpg 1.8x,
                      /images/profile-w_769.jpg 2x,
                      /images/profile-w_865.jpg 2.5x,
                      /images/profile-w_960.jpg 3x"
            ></source>
            <img
              className={getClassNames({
                className: 'profile-image',
              })}
              alt="Profile picture"
              src="/images/profile-w_650.jpg"
            />
          </picture>
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
                  <a href="http://eepurl.com/hdh99j" target="blank">
                    newsletter
                  </a>
                </strong>
                .
              </span>
            </div>
          </div>
        </section>
        <VerticalSpacer space="3rem" />
        <section
          className={getClassNames({
            className: 'contact',
          })}
        >
          <a
            href="https://www.linkedin.com/in/adam-kiss-270437109/"
            title="LinkedIn"
            target="blank"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/adams.work/"
            title="Instagram"
            target="blank"
          >
            <Instagram />
          </a>
          <a
            href="https://medium.com/@kiss.adam.a"
            title="Medium"
            target="blank"
          >
            <Medium />
          </a>
        </section>
      </main>
    </>
  );
};

Home.showHeader = true;
Home.pageName = 'home';

export default Home;
