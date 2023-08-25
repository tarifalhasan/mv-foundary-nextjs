import { ValidatorLineSvg } from "@/assets/icons/Svg";
import { grow_features_img } from "@/assets/images";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

const Grow = () => {
  return (
    <div className="">
      <div className="  grid place-items-center">
        <div>
          <div className=" flex flex-col space-y-3 items-center">
            <ValidatorLineSvg />
            <div className=" w-[50px]  bg-grow-gradient h-[50px] rounded-full  text-t-24 font-bold text-white grid place-items-center">
              3
            </div>
          </div>
          <div className=" pt-6 space-y-3">
            <h2 className=" title">
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
      <div className=" grid lg:grid-cols-2 gap-10 pt-8 lg:pt-12">
        <div className=" h-auto lg:h-[540px]">
          <Image
            src={grow_features_img}
            alt="validate_featue"
            className=" w-full  object-cover h-full rounded-2xl"
          />
        </div>
        <div className=" flex flex-col space-y-6 justify-between">
          {/* Gallery Card */}
          <GalleryCard
            title="Growth Loops"
            description="Unlock sustainable growth with our product-focused marketing plans. Experience rapid expansion as we initiate growth loops every 30 days."
          />
          <GalleryCard
            title="Product Metrics"
            description="Our analysis, based on the pirate metrics framework, delves into customer acquisition costs, lifetime value, trial conversions, product adoption speed, and churn rates. Armed with these insights, we refine your growth strategies and engineer new ones to propel your success."
            bg="bg-grow-gradient"
          />
          <GalleryCard
            title="Product Extension"
            description="Looking to take your product to the next level with cool new features? We're here to help! Our tech team can expand your product or provide a list of feature ideas to boost your growth loops. Let us make your product shine!"
          />
        </div>
      </div>
    </div>
  );
};

export default Grow;
