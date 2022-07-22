import { indexOf } from "lodash";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";

type PathBit = {
  display: string;
  current: boolean;
};

const parsePath = (path: string): PathBit[] => {
  const split = path.split("/");

  if (path.includes("_error")) {
    return [{ current: false, display: "!!!panik!!!" }];
  }

  let final = split.map((_bit, index) => {
    let bit: PathBit = {
      display: `${_bit}/`,
      current: false,
    };
    if (_bit === "") {
      bit.display = "~/";
    }
    if (index === split.length - 1) {
      bit.display = `${_bit}`;
      bit.current = true;
    }
    return bit;
  });

  return final;
};

export default function Path() {
  const router = useRouter();
  const path = parsePath(router.pathname);

  return (
    <p className="pb-4">
      {path.map((path) => (
        <Piece key={path.display} current={path.current}>
          {path.display}
        </Piece>
      ))}
    </p>
  );
}

const Piece = tw.a`
  ${(props: { current?: boolean }) =>
    props.current ? "text-white underline" : "text-[coral]"}
  font-mono
  text-xl
`;
