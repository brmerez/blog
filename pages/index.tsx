import styled from "styled-components"
import tw from "tailwind-styled-components"
import _ from "lodash"

interface HeroProps{
  url: string,
  height: number,
  tilt: number,
}

const randImg = ():HeroProps => ({
  url: `https://picsum.photos/240`,
  height: _.random(180, 280),
  tilt: _.random(-4, 4)
});

export default function Home(){
  return(
    <Wrapper>
      <Panel style={{height:"calc(100vh - 80px)", position:"relative"}} >
        <div className="tracking-wider flex z-10 flex-col px-[10%] md:px-0 gap-8 items-center justify-center min-h-[50vh]  ">
          <div>
            <p className="text-[coral] mb-2">Oi, meu nome é</p>
            <h1 className="text-4xl md:text-5xl mb-4">Bruno Merez,</h1>
            <h4 className="text-lg md:text-xl font-['Lora'] tracking-wider">Desenvolvedor fullstack baseado em <Destaque>ReactJs</Destaque> e <Destaque>Typescript</Destaque>.</h4>
          </div>
          <div className="flex gap-1 my-4 z-10 items-center translate-x-[-50%] absolute bottom-8">
            { Array(15).fill(0).map(() => {
              const rand = randImg();
              console.log(rand);
              return <Hero style={{transform: `rotate(${rand.tilt}deg)`, width:rand.height, height:rand.height}} src={rand.url}/>
            }) }
          </div>
          <div className="fixed -z-2 bottom-0 from-[#222] to-[#3330] bg-gradient-to-t w-screen h-1/3"/>
        </div>
      </Panel>
    </Wrapper>
  )
}

const Hero = tw.img`
  w-[240px]
  h-[240px]
  object-cover
  border-[4px]
  border-b-[16px]
  grayscale
  rounded-sm
  border-white
  rotate-[-4deg]
`;
const Wrapper = tw.main`
  flex
  flex-col
  gap-8
`;

const Panel = styled.section`
  height: 95vh;
  /* border: 1px solid #e4e4e4; */
`;

const Destaque = tw.span`
  text-[coral]
  font-bold
`
