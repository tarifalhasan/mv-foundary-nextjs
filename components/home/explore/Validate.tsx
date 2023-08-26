"use client";
import { ValidatorLineSvg } from "@/assets/icons/Svg";
import {
  grow_features_img,
  lanuch_features_img,
  validate_feature_img,
} from "@/assets/images";
import { AnimatedItems, AnimationContainer } from "@/utils/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const Validate = () => {
  const [activeCard, setActiveCard] = useState(1);
  const DataArry = [
    {
      image: lanuch_features_img,
      title: "Market Research",
      description:
        "Kickstart your idea by understanding your target market. We'll conduct market research, analyze competition, and assess market size. Gain the essential knowledge for successful validation.",
    },
    {
      image: validate_feature_img,
      title: "Validation Toolbox",
      description:
        "Our kit features 100+ tried-and-tested tactics to validate your ideas. Armed with market research insights, we'll develop a winning go-to-market plan, create essential assets, launch a powerful campaign, and measure success against predetermined goals.",
    },
    {
      image: grow_features_img,
      title: "Value Proposition",
      description:
        "We help you navigate the competitive landscape, analyze offerings, and identify key features for your MVP development. Get your product rolling with our value curve analysis.",
    },
  ];

  return (
    <m.div className="">
      <div className="  grid place-items-center">
        <div>
          <div className=" flex flex-col space-y-3 items-center">
            <h3 className=" text-t-18 font-poppins font-bold text-center">
              Explore the MVP Foundry way
            </h3>
            <ValidatorLineSvg />
            <div className=" w-[50px] bg-validator-gradient h-[50px] rounded-full  text-t-24 font-bold  grid place-items-center">
              1
            </div>
            <button className="validate_btn before:hover:bg-validator-gradient rounded-[40px] before:z-10 relative bg-validator-gradient py-2.5  px-11   text-[20px] font-bold  block mx-auto">
              <span className="z-20 relative"> Validate</span>
            </button>
          </div>
          <div className=" pt-6 space-y-3">
            <h2 className=" title">Make Something people want</h2>
            <p className=" max-w-[995px] mx-auto  text-t-13 sm:text-t-16 text-center font-semibold font-poppins text-skin-gray-500 lg:text-t-21">
              Count on us to validate your idea and attract your first 10+
              customers within 30 days. Our business validation frameworks
              provide actionable insights and real data, helping you secure
              funding for your MVP and future product development.
            </p>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div className=" grid lg:grid-cols-2 gap-10 pt-8 lg:pt-12">
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
                  activeCard === i
                    ? "bg-validator-gradient"
                    : "bg-skin-secondary"
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
      </div>
    </m.div>
  );
};

export default Validate;
