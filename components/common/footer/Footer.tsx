import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Container from "../Container";
import Logo from "../Logo";
import Newslatter from "./Newslatter";
const Footer = () => {
  return (
    <footer className=" relative bg-skin-footer-bg">
      <Container className=" py-9">
        <div className=" flex  space-y-5 flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className=" -space-y-2">
            <h2 className=" text-[28px] lg:text-t-36px font-bold font-poppins capitalize">
              Startup growth tips in
            </h2>
            <h2 className="text-[28px] lg:text-t-36px font-bold font-poppins capitalize">
              our weekly <span className="newsletter">newsletter</span>
            </h2>
          </div>
          <Newslatter />
        </div>
        <hr className=" h-[1px] opacity-10 bg-white  my-16 w-full" />
        <div className=" flex lg:items-start justify-between flex-wrap lg:flex-nowrap gap-5">
          <div className=" w-full basis-[30%]">
            <div>
              <Logo />
            </div>
            <ul className=" pt-6">
              <li className=" flex items-center text-t-16 font-normal text-[#C7C7C7] font-poppins">
                <MdOutlineLocationOn />
                <span>MVP Foundry SLU Andorra, La vella.</span>
              </li>
            </ul>
          </div>
          <div className="  basis-[70%]  flex  flex-wrap lg:flex-nowrap  2xl:justify-end 2xl:gap-[109px] justify-between">
            {/* quick links */}
            <div className=" ">
              <div>
                <h3 className=" font-poppins text-t-17 font-semibold text-white">
                  QUICK LINKS
                </h3>
              </div>
              <ul className=" pt-6 space-y-2">
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">HOME</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">Pricing Plan</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">Blog</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">About us</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">Startup</Link>
                </li>
              </ul>
            </div>
            {/* legal info */}
            <div className="">
              <div>
                <h3 className=" font-poppins text-t-17 font-semibold text-white">
                  LEGAL INFO
                </h3>
              </div>
              <ul className=" pt-6 space-y-2">
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">RISK WARNINGS</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">PRIVACY NOTICE</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">TERMS OF SERVICE</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">BECOME AFFILIATE</Link>
                </li>
                <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                  <Link href="/">ABOUT US</Link>
                </li>
              </ul>
            </div>
            {/* HELP CENTER*/}
            <div>
              <div>
                <h3 className=" font-poppins text-t-17 font-semibold text-white">
                  HELP CENTER
                </h3>
              </div>
              <ul className=" pt-6">
                <ul className=" pt-6 space-y-2">
                  <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                    <Link href="/">HELP CENTER</Link>
                  </li>
                  <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                    <Link href="/">HELP CENTER</Link>
                  </li>
                  <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                    <Link href="/">TFAQ</Link>
                  </li>
                  <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                    <Link href="/">QUICK START GUIDE</Link>
                  </li>
                  <li className=" text-t-16 font-normal text-[#C7C7C7] font-poppins">
                    <Link href="/">TUTORIALS</Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-skin-bg py-2">
        <Container>
          <div className=" w-full   flex-col sm:flex-row gap-4 flex items-center justify-between">
            <p>© 2022 MVP Foundry . All rights reserved.</p>
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-10 h-10 hover:bg-white hover:text-black rounded-full grid text-white place-items-center border border-[#5858A8]"
                >
                  <FaTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  target="_blank"
                  className=" w-10 h-10 hover:bg-white hover:text-black rounded-full grid text-white place-items-center border border-[#5858A8]"
                >
                  <FaLinkedinIn size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-10 h-10 hover:bg-white hover:text-black rounded-full grid text-white place-items-center border border-[#5858A8]"
                >
                  <AiOutlineYoutube size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
