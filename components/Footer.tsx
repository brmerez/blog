import tw from "tailwind-styled-components"

export default function Footer(){
  return(
    <FooterStyle>
      <small>&copy; 2022 Bruno Merez. Todos os direitos reservados.</small>
    </FooterStyle>
  )
}

const FooterStyle = tw.footer`
  bg-black
  flex
  items-center
  justify-center
  text-white
  h-min
  py-2
  px-[2%]
  lg:[5%]
  xl:px-[10%]
  2xl:px-[20%]
  font-['Fira_Code']
`;