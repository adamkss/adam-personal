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
                if: currentPage === 'about-me',
              }
            )}
          >
            {/* <Link href="/about-me">
              <a>About me</a>
            </Link> */}
          </li>
          <li
            className={getClassNames(
              {
                className: 'nav-list__list-item',
              },
              {
                className: 'nav-list__list-item-active',
                if: currentPage === 'articles',
              }
            )}
          >
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
