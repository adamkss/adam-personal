import { useEffect } from 'react';
import Head from 'next/head';
import styles from 'styles/blog.module.scss';
import { Header } from 'components/header';
import { getBlogPosts } from 'content/blog';
import BlogPostPreview from 'components/blogPostPreview';

const Blog = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>Adam Kiss | Blog</title>
      </Head>
      <div>
        {blogPosts.map((blogPost) => (
          <BlogPostPreview key={blogPost.title} {...blogPost} />
        ))}
      </div>
    </>
  );
};

Blog.showHeader = true;
Blog.pageName = 'blog';

export default Blog;

export async function getStaticProps(context) {
  const blogPosts = await getBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
}
