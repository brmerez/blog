import React from 'react'
import tw from 'tailwind-styled-components'
import { BsLinkedin, BsGithub, BsTwitter, BsXDiamondFill } from "react-icons/bs"
import styled from 'styled-components';

export default function Navbar() {
  return (
    <NavStyles>
      <Logo>
        <Block/>
        <Title>bruno(merez);</Title>
        <Chamada>// Desenvolvedor Fullstack</Chamada>
      </Logo>
      <NavLinks>
        <p>projetos</p>
        <p>sobre</p>
        <p>blog</p>
        <BsGithub className="text-xl"/>
        <BsTwitter className="text-xl"/>
        <BsLinkedin className="text-xl"/>
      </NavLinks>
      <BsXDiamondFill className='md:hidden text-white text-2xl' />
    </NavStyles>
  )
}

const Logo = tw.div`
  flex
  items-center
  font-['Menlo']
`;
const Block = tw.div`
  h-[16px]
  w-[16px]
  bg-[#DC78C6]
  block
  mr-2
  hover:bg-white
  hover:rotate-90
  hover:scale-125
  hover:cursor-pointer
  transition-all
`;

const Title = tw.h4`
  font-bold
  text-lg
  flex
  items-center
  gap-2
  text-white
  drop-shadow-md
  shadow-[#DC78C6]

`;

const Chamada = tw.span`
  opacity-60
  text-[#BD91CD]
  hidden
  lg:block
  text-xs
  italic
  ml-4
`;

const _NavLinks = styled.div`
  & > * {
    :hover{
      cursor: pointer;
      color: #DC78C6;
    }
  }
`

const NavLinks = tw(_NavLinks)`
  gap-4
  hidden
  md:flex
  items-center
  text-white
  font-semibold
  tracking-wider
`;

const NavStyles = tw.header`
  flex
  items-center
  justify-between
  h-[71px]
  border-b-[6px]
  border-b-[#DC78C6]
  shadow-md
  mb-4
`;
