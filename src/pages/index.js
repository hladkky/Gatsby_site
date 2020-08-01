import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/slider';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Slider />
    <Content />
    <Footer />
  </Layout>
);

export default IndexPage;

// export const query = graphql`
//   query HomeQuery {
//     page(slug: { eq: "home" }) {
//       title
//       content
//     }
//   }
// `;
