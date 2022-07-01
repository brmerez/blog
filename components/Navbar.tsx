import Link from "next/link";
import tw from "tailwind-styled-components"

export default function Navbar(){
  return(
    <NavStyle className="text-lg">
      <Title><Square />bruno_merez</Title>
      <Links>
        <Link href="/"><a>home</a></Link>
        <Link href="/blog"><a>blog</a></Link>
        <Link href="/blog"><a>projetos</a></Link>
        <Link href="/blog"><a>sobre</a></Link>
        <Link href="/blog"><a>linkedin</a></Link>
        <Link href="/blog"><a>github</a></Link>
      </Links>
    </NavStyle>
  )
}

const Square = tw.div`
  bg-white
  w-3
  h-3
`;

const Links = tw.div`
  justify-end
  text-white
  hidden
  md:flex
  w-1/4
  gap-4
  text-base
  font-extralight
`;
const Title = tw.h2`
  text-white
  text-xl
  flex
  items-center
  gap-2
  font-bold
`;

const NavStyle = tw.nav`
  bg-[#111]
  flex
  items-center
  justify-between
  py-5
  h-[69px]
  px-[3%]
  lg:[5%]
  xl:px-[10%]
  2xl:px-[20%]
  border-b-8
  border-amber-500
  font-['Fira_Code']
`;