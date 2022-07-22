import tw from "tailwind-styled-components";
import _ from "lodash";

interface HeroProps {
  url: string;
  height: number;
  tilt: number;
}

export default function Home() {
  return (
    <Wrapper>
      <Chamada>
        <div className="px-[7%] lg:m-auto lg:w-2/3 border-2 relative py-12 text-[0.95rem] md:text-[1.1rem]">
          <small className="absolute bottom-0 right-2 underline">
            apresentacao.md
          </small>
          <p className="text-lg">
            Opa, <i>tudo bão?</i>
          </p>
          <br />
          <p>
            Meu nome é Bruno, sou <Hih p>desenvolvedor web</Hih> de São Paulo -
            SP.
          </p>
          <br />
          <p>
            Meu interesse é desenvolver sistemas e aplicações que sejam
            <Hih> modulares</Hih> e <Hih>escaláveis</Hih>: Fáceis de{" "}
            <Hih g u>
              usar
            </Hih>
            , fáceis de{" "}
            <Hih g u>
              manter
            </Hih>
            , e fáceis de{" "}
            <Hih g u>
              testar
            </Hih>
            .
          </p>
          <br />
          <p>
            Conheça um pouco mais sobre o meu trabalho clicando{" "}
            <Hih b u>
              aqui
            </Hih>{" "}
          </p>
          {/* <br />
          <p>
            Por assim, sou um adepto (ou tento ser!) da{" "}
            <Hih>Arquitetura Limpa</Hih> (Clean Architecture) e do{" "}
            <Hih>Domain Driven Design</Hih>.
          </p> */}
          {/* <p>
            Considero a programação uma atividade fundamentalmente{" "}
            <Hih b>criativa</Hih>, tanto no quesito mais técnico de
            implementação quanto no talvez mais intrigante processo de
            arquitetura e entendimento de domínio.
          </p> */}
          {/* <p>
            Considero que a arquitetura do software e o entendimento do domínio
            são as partes cruciais para o desenvolvimento de qualquer aplicação.
          </p> */}
          {/* <br />
          <p>
            Atualmente trabalho na startup gastronômica{" "}
            <Hih p u>
              Assaz Orgânica
            </Hih>{" "}
            desenvolvendo uma míriade de soluções busuucando{" "}
            <Hih g>automatizar</Hih> e <Hih g>facilitar</Hih> os processos
            internos de produção -- desde o controle de pedidos até emissão de
            notas e controle de estoque.
          </p>
          <br /> */}
          <br />
          <p>
            Eu também escrevo de vez em quando no meu <Hih u>blog</Hih> sobre
            vários assuntos -- tech e <i>não-tech</i>.
          </p>
          <br />
          <p>
            Veja as últimas postagens clicando{" "}
            <Hih b u>
              aqui
            </Hih>
          </p>
          <br />
          <p>
            Para contato profissional, por favor se refira à página de{" "}
            <Hih b u>
              contato
            </Hih>
            .
          </p>
          <br />
          <p>Valeu!</p>
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
  font-[Menlo]
  gap-2
  flex
  text-white
  text-xl
`;
