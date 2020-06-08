import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/indexblog';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="Blog">
      <SEO title="Blog" />
      <p>Hey Blog!!</p>
      <p>
        If you&#39;d like to go back to homepage, <Link to="/">click here</Link>
        .
      </p>
    </Layout>
  );
}
