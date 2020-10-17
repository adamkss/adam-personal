import styles from 'components/header.module.scss';
import { ClassNameHelper } from 'utils/ClassNameHelper';
import Link from 'next/link';

const { getClassNames } = new ClassNameHelper(styles);

export const Header = ({ currentPage = 'home' }) => {
  return (
    <header className={styles['header']}>
      <h1 className={styles['header__title']}>Adam Kiss</h1>
      <nav className={styles['header__nav']}>
        <ul className={styles['header__nav-list']}>
          <li
            className={getClassNames(
              {
                className: 'nav-list__list-item',
              },
              {
                className: 'nav-list__list-item-active',
                if: currentPage === 'home',
              }
            )}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={getClassNames(
              {
                className: 'nav-list__list-item',
              },
              {
                className: 'nav-list__list-item-active',
                if: currentPage === 'blog',
              }
            )}
          >
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li
            className={getClassNames(
              {
                className: 'nav-list__list-item',
              },
              {
                className: 'nav-list__list-item-active',
                if: currentPage === 'newsletter',
              }
            )}
          >
            <a href="http://eepurl.com/hdh99j" target="blank">
              Newsletter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
