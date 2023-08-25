import { ValidatorLineSvg } from "@/assets/icons/Svg";
import { validate_feature_img } from "@/assets/images";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

const Validate = () => {
  return (
    <div className="">
      <div className="  grid place-items-center">
        <div>
          <div className=" flex flex-col space-y-3 items-center">
            <h3 className=" text-t-18 font-poppins font-bold text-center">
              Explore the MVP Foundry way
            </h3>
            <ValidatorLineSvg />
            <div className=" w-[50px] bg-validator-gradient h-[50px] rounded-full  text-t-24 font-bold text-white grid place-items-center">
              1
            </div>
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
        <div className=" h-auto lg:h-[540px]">
          <Image
            src={validate_feature_img}
            alt="validate_featue"
            className=" w-full  object-cover h-full rounded-2xl"
          />
        </div>
        <div className=" flex flex-col space-y-6 justify-between">
          {/* Gallery Card */}
          <GalleryCard
            title="Market Research"
            description="Kickstart your idea by understanding your target market. We'll conduct market research, analyze competition, and assess market size. Gain the essential knowledge for successful validation."
          />
          <GalleryCard
            title="Validation Toolbox"
            description="Our kit features 100+ tried-and-tested tactics to validate your ideas. Armed with market research insights, we'll develop a winning go-to-market plan, create essential assets, launch a powerful campaign, and measure success against predetermined goals."
            bg="bg-validator-gradient"
          />
          <GalleryCard
            title="Value Proposition"
            description="We help you navigate the competitive landscape, analyze offerings, and identify key features for your MVP development. Get your product rolling with our value curve analysis."
          />
        </div>
      </div>
    </div>
  );
};

export default Validate;
