"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Container from "../Container";
import Logo from "../Logo";
const Header = () => {
  const [pathName, setPathname] = useState("/");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Pricing",
      path: "pricing",
    },
    {
      name: "Blog",
      path: "blog",
    },
    {
      name: "Startups",
      path: "startups",
    },
  ];
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 w-full block py-6  z-50 transition-colors duration-300 `}
    >
      <Container>
        <header className=" relative z-50  flex items-center justify-between">
          <Logo />
          <div className=" hidden lg:flex items-center gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`#${link.path}`}
                onClick={() => setPathname(link.path)}
                className={` text-t-17 hover:text-white font-montesrrat font-bold ${
                  pathName === link.path ? "text-white" : "text-skin-gray-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="  lg:hidden items-center gap-2">
            <button onClick={() => setToggle((prev) => !prev)}>
              {!toggle ? (
                <HiOutlineMenuAlt3 className="text-white" size={25} />
              ) : (
                <MdClose className="text-white" size={25} />
              )}
            </button>
          </div>
          <div className=" hidden lg:flex items-center gap-2">
            <button
              onClick={() => setToggle(!toggle)}
              className=" btn primary-btn"
            >
              Contact Us
            </button>

            <button
              onClick={() => setToggle(!toggle)}
              className=" btn secondary-btn"
            >
              Sign Up
            </button>
          </div>
        </header>
        {toggle && (
          <div className="  min-h-screen px-8 z-40  fixed  bg-skin-bg w-full h-full left-0 right-0 top-0">
            <ul className=" pt-24 0 flex flex-col  justify-center gap-5">
              {navLinks.map((link, index) => (
                <Link
                  href={`#${link.path}`}
                  className={` text-t-17 hover:text-white font-montesrrat font-bold ${
                    pathName === link.path ? "text-white" : "text-skin-gray-500"
                  }`}
                  key={index}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
