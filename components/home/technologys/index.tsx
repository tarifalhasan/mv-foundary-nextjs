import {
  aws,
  figma,
  mix_panel,
  nextjs,
  openAi,
  re_tools,
  react_logo,
  svelte,
  w_logo,
} from "@/assets/images";
import Container from "@/components/common/Container";
import Image from "next/image";

const Technology = () => {
  const Data = [
    react_logo,
    aws,
    nextjs,
    svelte,
    w_logo,
    re_tools,
    mix_panel,
    figma,
    openAi,
  ];

  return (
    <>
      <Container className=" pt-[3rem] lg:pt-[5rem] ">
        <h2 className="title">Our technology with work with</h2>
        <div className=" flex pt-5 items-center lg:flex-nowrap  flex-wrap gap-[79px] justify-center">
          {Data.map((item, index) => (
            <Image key={index} src={item} alt="technology" />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Technology;
