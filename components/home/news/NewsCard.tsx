import { ArrowRight } from "@/assets/icons/Svg";
import { news1 } from "@/assets/images";
import { AnimatedItems } from "@/utils/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
const NewsCard = () => {
  return (
    <m.div variants={AnimatedItems} className="news_card p-5 space-y-4">
      <div className=" w-full">
        <Image
          src={news1}
          className=" rounded-[8.937px] aspect-video  float-none"
          alt="news"
        />
      </div>
      <div className=" flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <AiOutlineClockCircle className="text-skin-gray-300 " />
          <span className=" text-t-16 font-normal text-skin-gray-300 font-poppins">
            April 6, 2021
          </span>
        </div>
        <p className=" text-gradient font-poppins">Validation</p>
      </div>
      <h2 className="leading-[37px] text-t-18 lg:text-t-24 font-semibold font-poppins text-white">
        Individual coin ownership records are stored in a digital
      </h2>
      <p className=" text-t-16 text-skin-gray-500 font-normal font-poppins">
        established fact that a reader will distracted by the readable content
        of a page
      </p>
      <button className=" inline-flex items-center gap-1">
        <span className="text-gradient text-t-16 font-poppins font-normal">
          Learn More
        </span>
        <ArrowRight />
      </button>
    </m.div>
  );
};

export default NewsCard;
