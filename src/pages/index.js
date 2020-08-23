import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Slider from '../components/Slider/slider';
import Header from '../components/Header/header';
import Content from '../components/Content/content';
import Footer from '../components/Footer/footer';

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
