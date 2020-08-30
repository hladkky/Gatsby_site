import React from 'react';

import './../components/layout.css';

import SEO from '../components/Seo/seo';
import Slider from '../components/Slider/slider';
import Header from '../components/Header/header';
import Content from '../components/Content/content';
import Footer from '../components/Footer/footer';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <Slider />
    <Content />
    <Footer />
  </>
);

export default IndexPage;
