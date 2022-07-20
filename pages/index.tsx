import styled from "styled-components";
import tw from "tailwind-styled-components";
import _ from "lodash";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dracula,
  monokaiSublime,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

interface HeroProps {
  url: string;
  height: number;
  tilt: number;
}

const randImg = (): HeroProps => ({
  url: `https://picsum.photos/240`,
  height: _.random(180, 280),
  tilt: _.random(-4, 4),
});

export default function Home() {
  return (
    <Wrapper>
      <Chamada>
        <h2 className="text-[coral] pb-4">~/</h2>
        <div className="px-[7%] lg:m-auto lg:w-2/3 border-2 relative py-12 text-[0.9rem] md:text-[1.1rem]">
          <small className="absolute bottom-0 right-2 underline">
            apresentacao.md
          </small>
          <p>
            Opa, <i>tudo bão?</i>
          </p>
          <br />
          <p>
            Meu nome é Bruno, sou <Hih p>desenvolvedor web</Hih> baseado em São
            Paulo - SP. Trabalho principalmente com <Hih>React</Hih> e{" "}
            <Hih>Typescript</Hih>.
          </p>
          <br />
          <p>
            Atualmente trabalho na startup gastronômica{" "}
            <Hih p u>
              Assaz Orgânica
            </Hih>{" "}
            criando soluções para <Hih g>automatizar</Hih> e{" "}
            <Hih g>facilitar</Hih> os processos internos de produção.
          </p>
          <br />
          <p>
            Conheça um pouco do meu trabalho{" "}
            <span className="underline text-cyan-400">aqui</span>.
          </p>
          <br />
          <p>
            Eu também escrevo de vez em quando no meu <Hih u>blog</Hih> sobre
            vários assuntos
          </p>
        </div>
      </Chamada>
    </Wrapper>
  );
}

const Hih = tw.span`
  italic
  ${(props: any) => (props.p ? "text-[#DC78C6]" : "text-[coral]")}
  ${(props: any) => (props.b ? "text-cyan-400" : "")}
  ${(props: any) => (props.g ? "text-lime-400" : "")}
  ${(props: any) => (props.u ? "underline" : "")}
`;

const Wrapper = tw.main`
  flex
  flex-col
  gap-8
`;

const Chamada = tw.section`
  w-full
  h-full
  flex-col
  font-mono
  gap-2
  flex
  text-white
  text-xl
`;
