import { BsChevronDoubleDown } from "react-icons/bs";
import tw from "tailwind-styled-components";

export default function Sobre() {
  return (
    <div>
      <div>
        <div className="w-full flex justify-between gap-4 items-center bg-pink text-bg p-3 mb-4">
          <h4>/* Stack */</h4>
          <div className="w-[20px] h-[20px] rounded-full bg-bg border-solid border-[2px] border-bg" />
          {/* <BsChevronDoubleDown /> */}
        </div>
        <section className="w-[98%] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {MySkills.map((sk) => (
            <Card key={sk.name} data={sk} />
          ))}
        </section>
      </div>
      <br />
    </div>
  );
}

interface ICard {
  data: SkillGroup;
  primary?: string;
  children?: React.ReactNode | React.ReactNode[];
}

function Card({ data, primary = "pink", children }: ICard) {
  return (
    <SCard primary={primary}>
      <Title primary={primary}>// {data.name}</Title>
      <div className="p-4">
        {data.skills
          .sort((a, b) => Number(a.skill < b.skill))
          .map((sk) => (
            <p className="flex items-center justify-between">
              <span className="">&gt; {sk.name}</span>
              <span className={mapSkill(sk.skill)}>
                {"".padEnd(sk.skill, "ʃ")}
                {/* {"".padEnd(sk.skill, "✚")} */}
              </span>
            </p>
          ))}
      </div>
    </SCard>
  );
}

// const _Card = styled.div``;

const Title = tw.h4`
  p-2
  w-full
  ${(props: ICard) => `bg-${props.primary}`}
  text-bg
`;

const SCard = tw.div`
  relative
  flex
  flex-col
  rounded-sm
  border-2
  border-solid
  ${(props: ICard) => `border-${props.primary}`}
`;

interface SkillGroup {
  name: string;
  skills: Skill[];
}

type Skill = {
  name: string;
  skill: number;
};

enum SkillColor {
  "excellent" = "text-lime-800",
  "great" = "text-lime-600",
  "ok" = "text-lime-400",
  "regular" = "text-yellow-400",
  "bad" = "text-yellow-700",
}

const mapSkill = (level: number) => {
  if (level > 4) {
    return SkillColor.excellent;
  }
  if (level === 4) {
    return SkillColor.great;
  }
  if (level === 3) {
    return SkillColor.ok;
  }
  if (level === 2) {
    return SkillColor.regular;
  }
  if (level <= 1) {
    return SkillColor.bad;
  } else {
    throw new Error("Invalid colour! What the hell happened???");
  }
};

const MySkills: SkillGroup[] = [
  {
    name: "Linguagens",
    skills: [
      { name: "Typescript", skill: 5 },
      { name: "Javascript", skill: 4 },
      { name: "HTML / CSS", skill: 4 },
      { name: "Python", skill: 3 },
      { name: "Java", skill: 2 },
      { name: "Rust", skill: 1 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", skill: 4 },
      { name: "Next.js", skill: 3 },
      { name: "Express.js", skill: 3 },
      { name: "Django", skill: 2 },
      { name: "Svelte", skill: 2 },
      { name: "Spring", skill: 1 },
    ],
  },
  {
    name: "Demais Tecnologias",
    skills: [
      { name: "Git", skill: 3 },
      { name: "Docker", skill: 3 },
      { name: "Bash / Linux", skill: 3 },
      { name: "RabbitMQ", skill: 2 },
      { name: "Redis", skill: 2 },
    ],
  },
  {
    name: "Banco de Dados",
    skills: [
      { name: "MongoDB", skill: 3 },
      { name: "SQL Server", skill: 3 },
      { name: "MySQL", skill: 3 },
    ],
  },
  {
    name: "Bibliotecas",
    skills: [
      { name: "styled-components", skill: 4 },
      { name: "tailwindcss", skill: 4 },
      { name: "MUI", skill: 3 },
      { name: "Bootstrap", skill: 2 },
    ],
  },
];
