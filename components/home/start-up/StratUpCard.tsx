import { ArrowRight } from "@/assets/icons/Svg";
import { uber } from "@/assets/images";
import { AnimatedItems } from "@/utils/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
const StratUpCard = () => {
  return (
    <m.div
      variants={AnimatedItems}
      className=" cursor-pointer bg-skin-start-up-card   group  hover:bg-skin-start-up-card-hover border-[1px] border-[#333247]  p-5 space-y-5 rounded-radius-20"
    >
      <div className="inline-flex items-center gap-3">
        <div>
          <Image
            src={uber}
            alt="uber"
            className=" w-16 h-16 rounded-full object-cover"
          />
        </div>
        <h2 className=" text-t-36px text-white font-bold font-poppins">Uber</h2>
      </div>
      <p className=" group-hover:text-white sub-title text-left text-[#A09FB0]">
        Get a ride in minutes. Or become a driver and earn money on your
        schedule.
      </p>
      <button className="inline-flex group-hover:bg-clip-text group-hover:bg-text-gradient1 items-center gap-2 sub-title text-[#A09FB0]">
        <span>Learn More</span>
        <span className="  block group-hover:hidden">
          <svg
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.45312 3.21191L11.6046 8.36343L6.45312 13.5149"
              stroke="#A09FB0"
              strokeWidth="1.54545"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="sr-only group-hover:not-sr-only">
          <ArrowRight />
        </span>
      </button>
    </m.div>
  );
};

export default StratUpCard;
