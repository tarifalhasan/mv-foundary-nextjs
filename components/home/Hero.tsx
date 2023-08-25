import { left_boble, right_boble } from "@/assets/images";
import Image from "next/image";
import Container from "../common/Container";

const Hero = () => {
  return (
    <section id="home" className="relative  overflow-hidden    ">
      <Container className="text-center pt-20 sm:pt-28 lg:pt-40 pb-20 2xl:pb-28 ">
        <h1 className="hero_title">
          Validate.Launch.<span className="grow">Grow</span>
        </h1>
        <p className="hero_des">
          Looking to turn your startup idea into a success story? We&apos;ve got
          you covered! Our services include idea validation, MVP development,
          and product growth. Let us help you every step of the way!
        </p>
        <button className="btn secondary-btn mt-10">
          Start a project with us
        </button>
      </Container>
      <div className=" absolute left-0 -bottom-[62%]">
        <Image
          src={right_boble}
          className=" max-w-[80%]  w-full"
          alt="right_bubble"
        />
      </div>
      <div className=" absolute  right-0 -bottom-[62%]">
        <Image className="  w-full" src={left_boble} alt="left_bubble" />
      </div>
    </section>
  );
};

export default Hero;
