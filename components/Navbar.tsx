import Link from "next/link";
import tw from "tailwind-styled-components"

export default function Navbar(){
  return(
    <NavStyle className="text-lg">
      <Title><Square />bruno merez</Title>
      <Links>
        <Link href="/blog"><a>_blog</a></Link>
        <Link href="/blog"><a>_projetos</a></Link>
        <Link href="/blog"><a>_sobre</a></Link>
        <Link href="/blog"><a>_linkedin</a></Link>
        <Link href="/blog"><a>_github</a></Link>
      </Links>
    </NavStyle>
  )
}

const Square = tw.div`
  bg-[coral]
  w-3
  h-3
`;

const Links = tw.div`
  justify-end
  hidden
  md:flex
  w-1/4
  gap-4
  text-base
  font-light
  font-mono
`;
const Title = tw.h2`
  text-2xl
  flex
  items-center
  gap-2
  font-lighter
`;

const NavStyle = tw.nav`
  bg-[#333]
  text-[#fff]
  flex
  items-center
  justify-between
  py-5
  h-[61px]
  px-[3%]
  lg:[5%]
  xl:px-[10%]
  2xl:px-[20%]
`;