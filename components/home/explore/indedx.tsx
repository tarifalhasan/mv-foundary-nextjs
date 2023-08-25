import { asets2, g6 } from "@/assets/images";
import Container from "@/components/common/Container";
import Image from "next/image";
import Grow from "./Grow";
import Launch from "./Launch";
import Validate from "./Validate";

const Explore = () => {
  return (
    <section className=" relative overflow-hidden w-full py-14">
      <Container className=" relative z-50">
        <Validate />
        <Launch />
        <Grow />
      </Container>
      <div className="absolute z-30 hidden lg:block top-[10%] -left-[18%] w-[446px] h-[446px] rounded-full bg-skin-royal-blue opacity-20 blur-[245px]"></div>
      <div className="absolute z-30 hidden lg:block top-[77%] -left-[18%] w-[446px] h-[446px] rounded-full bg-skin-royal-blue opacity-20 blur-[245px]"></div>
      <div className="absolute z-30 hidden lg:block top-[85%] -left-[18%] w-[446px] h-[446px] rounded-full bg-[#F7138F] opacity-20 blur-[245px]"></div>
      <div className="absolute z-30 top-[3%] hidden lg:block  -right-[15%] w-[440px] h-[441px] rounded-full bg-skin-tangerine-orange opacity-10 blur-[245px]"></div>
      <div className="absolute z-30 top-[52%] hidden lg:block  -right-[5%] w-[440px] h-[441px] rounded-full bg-skin-tangerine-orange opacity-10 blur-[245px]"></div>
      <div className="absolute z-30 top-[38%] hidden lg:block  -right-[5%] w-[440px] h-[441px] rounded-full bg-skin-royal-blue opacity-10 blur-[245px]"></div>
      <div className="absolute z-30 top-[65%] hidden lg:block  -right-[5%] w-[440px] h-[441px] rounded-full bg-skin-royal-blue opacity-10 blur-[245px]"></div>
      <div className="absolute z-30 top-[4%] hidden lg:block  right-[10%]">
        <Image src={asets2} alt="sdsds" />
      </div>
      <div className="absolute z-30 top-[62%] hidden lg:block  right-[10%] ">
        <Image src={g6} alt="sdsds" />
      </div>
    </section>
  );
};

export default Explore;
