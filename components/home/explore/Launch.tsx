"use client";
import { LaunchLinkSvg } from "@/assets/icons/Svg";
import {
  grow_features_img,
  lanuch_features_img,
  validate_feature_img,
} from "@/assets/images";
import { AnimatedItems, AnimationContainer } from "@/utils/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Launch = () => {
  const [activeCard, setActiveCard] = useState(1);
  const DataArry = [
    {
      image: validate_feature_img,
      title: "Technology stack",
      description:
        "At MVP Foundry, we prioritize simplicity and time-tested technology for your MVP. Our goal is to deliver a high-quality product that fosters easy expansion. We don't limit you to specific tech choices; instead, we build scalable solutions ready for your growth.",
    },
    {
      image: lanuch_features_img,
      title: "We #buildinpublic",
      description:
        "Attract customers and create buzz with BuildInPublic. Get people hyped about your offering from the start, whether you prefer a stealth approach or a public launch. The choice is yours!",
    },
    {
      image: grow_features_img,
      title: "Launch Early, Launch Often",
      description:
        "Experience fast access to new features and cool stuff, prioritizing your satisfaction. With regular releases, you'll always have the freshest enhancements, bug fixes, and security updates, ensuring a stable and highly reliable product that brings a smile to your face.",
    },
  ];

  return (
    <m.div className=" py-[100px]">
      <div className="  grid place-items-center">
        <div>
          <div className=" flex flex-col space-y-3 items-center">
            <LaunchLinkSvg />
            <div className=" w-[50px] bg-launch-gradient h-[50px] rounded-full  text-t-24 font-bold text-white grid place-items-center">
              2
            </div>
            <button className="validate_btn before:hover:bg-launch-gradient py-2.5  px-11   text-[20px] font-bold  rounded-[40px] before:z-10 relative bg-launch-gradient  block mx-auto">
              <span className="z-20 relative">Launch</span>
            </button>
          </div>
          <div className=" pt-6 space-y-3">
            <h2 className=" title">Get your product early to market.</h2>
            <p className="  max-w-[995px] mx-auto  text-t-13 sm:text-t-16 text-center font-semibold font-poppins text-skin-gray-500 lg:text-t-21">
              Choose from no-code, low-code, or code components. Our mission is
              to accelerate your launch, and we&aspo;ll collaborate to determine
              your essential features and identify the ideal technology for your
              MVP. With our rapid 4-week-to-market strategy, you&apos;ll attract
              users, generate revenue, and gather invaluable data to impress
              investors and secure funding.
            </p>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <m.div className=" grid lg:grid-cols-2 gap-10 pt-8 lg:pt-12">
        <div data-aos="fade-right" className=" h-auto lg:h-[540px]">
          <Image
            src={DataArry[activeCard].image}
            alt="validate_featue"
            className=" w-full  object-cover h-full rounded-2xl"
          />
        </div>
        <m.div
          variants={AnimationContainer}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: true }}
          className=" flex flex-col space-y-6 justify-between"
        >
          {/* Gallery Card */}
          {DataArry.map((data, i) => {
            return (
              <m.div
                onClick={() => setActiveCard(i)}
                variants={AnimatedItems}
                key={data.title}
                className={`${
                  activeCard === i ? "bg-launch-gradient " : "bg-skin-secondary"
                } rounded-[16px]  cursor-pointer p-4 space-y-1  sm:space-y-3`}
              >
                <h2 className=" text-t-24 font-bold font-poppins text-white">
                  {data.title}
                </h2>
                <p className=" text-t-13 sm:text-t-16 font-medium text-white font-poppins">
                  {data.description}
                </p>
              </m.div>
            );
          })}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Launch;
