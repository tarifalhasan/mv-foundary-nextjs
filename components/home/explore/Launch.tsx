import { LaunchLinkSvg } from "@/assets/icons/Svg";
import { lanuch_features_img } from "@/assets/images";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

const Launch = () => {
  return (
    <div className=" py-[100px]">
      <div className="  grid place-items-center">
        <div>
          <div className=" flex flex-col space-y-3 items-center">
            <LaunchLinkSvg />
            <div className=" w-[50px] bg-launch-gradient h-[50px] rounded-full  text-t-24 font-bold text-white grid place-items-center">
              2
            </div>
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
      <div className=" grid lg:grid-cols-2 gap-10 pt-8 lg:pt-12">
        <div className=" flex flex-col space-y-6 justify-between">
          {/* Gallery Card */}
          <GalleryCard
            title="Technology stack"
            description="At MVP Foundry, we prioritize simplicity and time-tested technology for your MVP. Our goal is to deliver a high-quality product that fosters easy expansion. We don't limit you to specific tech choices; instead, we build scalable solutions ready for your growth."
          />
          <GalleryCard
            title="We #buildinpublic"
            description="Attract customers and create buzz with BuildInPublic. Get people hyped about your offering from the start, whether you prefer a stealth approach or a public launch. The choice is yours!"
            bg="bg-launch-gradient"
          />
          <GalleryCard
            title="Launch Early, Launch Often"
            description="Experience fast access to new features and cool stuff, prioritizing your satisfaction. With regular releases, you'll always have the freshest enhancements, bug fixes, and security updates, ensuring a stable and highly reliable product that brings a smile to your face."
          />
        </div>
        <div className=" h-auto lg:h-[540px]">
          <Image
            src={lanuch_features_img}
            alt="validate_featue"
            className=" w-full  object-cover h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Launch;
