import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export default function Card() {
  return (
    <CardStyle>
      <Hero>
        <HeroImg src="https://picsum.photos/400" />
      </Hero>
      <Info>
        <Title>DDD e Typescript</Title>
        <small>em <i className='underline'>Arquitetura de Software</i></small>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione saepe corporis impedit voluptas, aut blanditiis alias labore possimus in fuga autem, non reprehenderit! Veritatis blanditiis hic suscipit odit rem magnam!
        </Desc>
      </Info>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  flex: 1;
  font-family: 'Fira Code';
  /* border: 1px solid #222; */
  flex: 1;
`;
const Title = styled.h4`
  font-size: 1.2rem;
  background-color: #000;
  width: fit-content;
  color: #fff;
  padding-inline: 0.5rem;
`;

const Info = styled.div`
  padding: 1rem;
`;

const Hero = styled.div`
  height: 200px;
  width: 100%;
  overflow: hidden;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Desc = styled.p`
  font-size: 0.8rem;
  text-align: justify;
  font-family: "Fira Sans";
  margin: 0.5rem 0;
`;



// const Title = tw.h4`
//   text-xl
// ;`
// const Print = tw.small`
  
// ;`
// const CardStyle = tw.div`
//   p-10
//   border-2
//   flex-auto
//   rounded-lg
// `
