import { nes_bulb_l } from "@/assets/images";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/get-in-touch";
import News from "@/components/home/news";
import StartUp from "@/components/home/start-up";
import Team from "@/components/home/team";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative overflow-hidden">
      <Header />
      <Hero />
      <Pricing />
      <Team />
      <StartUp />
      <Contact />
      <News />
      <Footer />
      <div className=" z-30 absolute left-0 top-[55%]">
        <Image src={nes_bulb_l} alt="gradient" />
      </div>
    </div>
  );
}
