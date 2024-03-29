"use client";
import { nes_bulb_l } from "@/assets/images";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Explore from "@/components/home/explore/indedx";
import Contact from "@/components/home/get-in-touch";
import News from "@/components/home/news";
import OurPartners from "@/components/home/our-partners/OurPartners";
import StartUp from "@/components/home/start-up";
import Team from "@/components/home/team";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className=" relative overflow-hidden">
      <Header />
      <Hero />
      <OurPartners />
      <Explore />
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
