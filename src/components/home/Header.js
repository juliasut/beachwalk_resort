import React from 'react';
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg';
import homeImg from '../../images/homeBcg.jpeg';

export const Header = () => {
  return (
    <Hero img={homeImg}>
      <h1>Hello</h1>
    </Hero>
  )
}
