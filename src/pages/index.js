import React from "react";

import "./styles.css";

import Header from '../components/Header'
import Logo from '../components/Logo'
import BtnWhatsapp from '../components/BtnWhatsapp'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Selo from '../components/Selo'
import Projetos from '../components/Projetos'

import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Index = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <title>Lima Moveis Planejados</title>
      </Helmet>

      <Header>
        <Logo />
        <BtnWhatsapp />
      </Header>

      <Hero />
      <Selo />
      <Projetos />
      
      <Footer />
    </>
  );
};

export default Index;
