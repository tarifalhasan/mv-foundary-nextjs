"use client";
import {
  grow_features_img,
  lanuch_features_img,
  validate_feature_img,
} from "@/assets/images";
import { AnimatedItems, AnimationContainer } from "@/utils/animation";
import { motion as m } from "framer-motion";

import { ValidatorLineSvg } from "@/assets/icons/Svg";
import { useState } from "react";

import Image from "next/image";

const Grow = () => {
  const [activeCard, setActiveCard] = useState(1);
  const DataArry = [
    {
      image: validate_feature_img,
      title: "Growth Loops",
      description:
        "Unlock sustainable growth with our product-focused marketing plans. Experience rapid expansion as we initiate growth loops every 30 days.",
    },
    {
      image: grow_features_img,
      title: "Product Metrics",
      description:
        "Our analysis, based on the pirate metrics framework, delves into customer acquisition costs, lifetime value, trial conversions, product adoption speed, and churn rates. Armed with these insights, we refine your growth strategies and engineer new ones to propel your success.",
    },
    {
      image: lanuch_features_img,
      title: "Product Extension",
      description:
        "Looking to take your product to the next level with cool new features? We're here to help! Our tech team can expand your product or provide a list of feature ideas to boost your growth loops. Let us make your product shine!",
    },
  ];
  return (
    <m.div className="">
      <div className="  grid place-items-center">
        <div>
          <div className=" flex flex-col space-y-3 items-center">
            <ValidatorLineSvg />
            <div className=" w-[50px]  bg-grow-gradient h-[50px] rounded-full  text-t-24 font-bold text-white grid place-items-center">
              3
            </div>
            <button className="validate_btn before:hover:bg-grow-gradient rounded-[40px] before:z-10 relative bg-grow-gradient py-2.5  px-11   text-[20px] font-bold  block mx-auto">
              <span className="z-20 relative">Grow</span>
            </button>
          </div>
          <div className=" pt-6 space-y-3">
            <h2 className=" max-w-[1124px]  title">
              Grow Attract customers with the power of Product-led growth.
            </h2>
            <p className=" max-w-[995px] mx-auto  text-t-13 sm:text-t-16 text-center font-semibold font-poppins text-skin-gray-500 lg:text-t-21">
              Through the power of product-led growth, we&apos;ll prepare your
              product for success, attracting and retaining customers
              effortlessly. Get ready to secure that series A funding!
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
                  activeCard === i ? "bg-grow-gradient" : "bg-skin-secondary"
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

export default Grow;
