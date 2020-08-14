import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/slider';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Slider />
    <Content />
    <Footer />
  </Layout>
);

export default IndexPage;
