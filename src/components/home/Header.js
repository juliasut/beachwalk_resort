import React from 'react';
import Hero from '../globals/Hero';
// import aboutImg from '../../images/aboutBcg.jpeg';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons';

export const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad voluptatem suscipit obcaecati eaque, reiciendis accusantium? Mollitia, assumenda tempora!"
      >
      <PrimaryBtn t="1rem">view details</PrimaryBtn>
      {/* <PrimaryBtn l="1rem" as="a" href="https://www.google.com">link to somewhere</PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};
