import React from 'react'
import Herosection from '../components/Herosection';
import Wrapper from '../Wrappers/Wrapper';
import HeroMain from '../components/HeroMain';



const Home = () => {
  return (
    <Wrapper>
      <Herosection />
      <HeroMain />
    </Wrapper>
  )
}

export default Home