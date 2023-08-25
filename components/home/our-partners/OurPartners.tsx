"use client";

import {
    airwallex,
    asana,
    fresh_work,
    github,
    out_race,
} from "@/assets/images";
import Container from "@/components/common/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
const OurPartners = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slider index
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the active index to move to the next slider
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const data = [
    {
      testiminal:
        "Get 20 seats of GitHub Enterprise free for one year, 50% off in year 2 for GitHub Enterprise. (AWS, Google, Github, other with free startup credits.",
      brand: github,
      id: 1,
    },
    {
      testiminal:
        "Get 40 seats of GitHub Enterprise free for one year, 50% off in year 2 for GitHub Enterprise. (AWS, Google, Github, other with free startup credits.",
      brand: asana,
      id: 2,
    },
    {
      testiminal:
        "Get 50 seats of GitHub Enterprise free for one year, 50% off in year 2 for GitHub Enterprise. (AWS, Google, Github, other with free startup credits.",
      brand: fresh_work,
      id: 3,
    },
    {
      testiminal:
        "Get 60 seats of GitHub Enterprise free for one year, 50% off in year 2 for GitHub Enterprise. (AWS, Google, Github, other with free startup credits.",
      brand: out_race,
      id: 4,
    },
    {
      testiminal:
        "Get 60 seats of GitHub Enterprise free for one year, 50% off in year 2 for GitHub Enterprise. (AWS, Google, Github, other with free startup credits.",
      brand: airwallex,
      id: 5,
    },
  ];

  return (
    <section className="py-16 bg-skin-secondary">
      <Container className="space-y-4">
        <h2 className="text-t-24 font-semibold capitalize font-poppins text-center">
          Receive up to $150,000 from our partners
        </h2>
        <div className=" over grid py-9 grid-cols-1  sm:grid-cols-5 gap-5">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`inline-flex  cursor-pointer relative rounded-lg items-center justify-center  h-[100px] px-5 ${
                activeIndex === index
                  ? " bg-no-repeat  relative z-20  btn_tes  "
                  : "bg-[#1C1934]"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                className=" relative z-40"
                src={item.brand}
                alt={item.testiminal}
              />

              <div
                className={`  ${
                  activeIndex === index ? "inline-block" : "hidden"
                } triangle absolute top-full triangle-5`}
              ></div>
            </div>
          ))}
        </div>
        <div className=" relative inline-flex z-20 items-center justify-center btn_tes  py-4 px-[3px] w-full  rounded-lg  ">
          <p className="text-t-16   rounded-lg    px-4  z-30   md:text-t-21 font-medium text-white">
            {data[activeIndex].testiminal}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;
