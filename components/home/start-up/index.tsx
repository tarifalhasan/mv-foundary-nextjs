import { frame1 } from "@/assets/images";
import Container from "@/components/common/Container";
import Image from "next/image";
import Technology from "../technologys";
import StratUpCard from "./StratUpCard";

export default function StartUp() {
  return (
    <section
      id="startups"
      className=" relative  overflow-hidden py-16 lg:py-24"
    >
      <Container className=" relative z-50">
        <div className="space-y-6 lg:space-y-12">
          <div className="space-y-1">
            <h2 className="title">Startups</h2>
            <p className="sub-title">
              Our awesome startup customers we&apos;re working with!
            </p>
          </div>
          <div className=" grid sm:grid-cols-2 gap-6 lg:grid-cols-3">
            <StratUpCard />
            <StratUpCard />
            <StratUpCard />
            <StratUpCard />
            <StratUpCard />
            <StratUpCard />
          </div>
          <Technology />
        </div>
      </Container>
      <div className="absolute z-30 hidden lg:block -top-[5%] -right-[15%] w-[588px] h-[588px] rounded-full bg-skin-royal-blue opacity-20 blur-[245px]"></div>
      <div className="absolute z-30 top-[20%] hidden lg:block  -left-[15%] w-[601px] h-[601px] rounded-full bg-skin-tangerine-orange opacity-20 blur-[245px]"></div>
      <div className="absolute z-40  top-[10%] hidden lg:block   right-0  ">
        <Image src={frame1} alt="frame" />
      </div>
    </section>
  );
}
