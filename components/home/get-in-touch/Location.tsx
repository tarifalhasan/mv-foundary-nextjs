import { location } from "@/assets/images";
import Image from "next/image";

const Location = () => {
  return (
    <div>
      <Image className=" w-full h-full" src={location} alt="sdkms" />
    </div>
  );
};

export default Location;
