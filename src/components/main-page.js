import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import './style.css'

const MainPage = () => {
  return (
    <section id='react'>
      <Header />
      <Content />
      <Footer />
    </section>
  )
}

export default MainPage;