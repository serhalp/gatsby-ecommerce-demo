import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={toOptimizedImage('/blogCover.png')}
          title={`The new standard of Closing`}
          ctaLink={'read story'}
          ctaTo={'/blog/sample'}
          header={'design'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Design
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Collaboration
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Interview
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            News
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export async function getServerData() {
  console.log('getServerData');
  return {
    props: {
      hello: 'from the server',
    },
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control': 'public, max-age=31536000',
      'Cache-Tag': 'dynamicThingy',
    },
  };
}
