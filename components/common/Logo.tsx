import { LogoSvg } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        className=" w-[50%] sm:w-[75%] lg:w-[90%]"
        src={LogoSvg}
        alt="mvp_founddry"
      />
    </Link>
  );
};

export default Logo;
