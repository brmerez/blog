import Head from "next/head";
import tw from "tailwind-styled-components"
import Card from "../../components/Card";

export default function Blog(){
  return(
    <Container>
      <Head>
        <title>Blog | Bruno Merez</title>
      </Head>
      <Search type="text" placeholder="Pesquisar..." />
      <Wrapper>
        <CardWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardWrapper>
        <Sidebar>
          <h3 className="text-2xl mb-2 font-bold font-['Fira_Code']">Categorias</h3>
          <Tags>
            <Tag>Arquitetura de Software</Tag>
            <Tag>DDD</Tag>
            <Tag>Typescript</Tag>
            <Tag>React</Tag>
            <Tag>Tecnologia</Tag>
            <Tag>APIs</Tag>
            <Tag>Reflexões</Tag>
          </Tags>
        </Sidebar>
      </Wrapper>
    </Container>
  )
}

const CardWrapper = tw.div`
  w-full
  grid
  grid-cols-1
  lg:grid-cols-2
  gap-3
`;
  
const Sidebar = tw.div`
  hidden
  px-4
  md:block
  gap-6
  w-[clamp(400px,_33%,_500px)]
  border-l-4
  border-[#666]
`;

const Tags = tw.div`
  flex
  flex-wrap
  gap-2
`;

const Tag = tw.p`
  text-sm
  font-bold
  text-[#fff]
  bg-[#111]
  px-2
  py-1
  rounded-sm
`;


const Wrapper = tw.div`
  flex
  gap-6
`;

const Search = tw.input`
  font-['Fira_Code']
  placeholder:italic
  text-lg
  rounded-sm
  px-4
  shadow-md
  outline-2
  outline-white
`;

const Container = tw.section`
  flex
  flex-col
  gap-6
`;