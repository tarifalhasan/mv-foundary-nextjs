import { motion as m } from "framer-motion";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
interface CardProps {
  variant: "primary" | "secondary";
  title: string;
  list: Array<string>;
  subTitle: string;
  price: string;
  variants: any;
}
export const PrimaryPricingCard: React.FC<CardProps> = ({
  variant,
  title,
  list,
  subTitle,
  price,
  variants,
  ...restProps
}) => {
  return (
    <m.div
      variants={variants}
      className={`shadow-pricing_card overflow-hidden  p-0 m-0  rounded-[20px] ${
        variant === "primary"
          ? "bg-skin-pricging-card-primary"
          : "bg-skin-pricging-card-secondary"
      }`}
      {...restProps}
    >
      <div
        className={` py-5 space-y-5 px-5 ${
          variant === "primary"
            ? " bg-skin-pricing-card-p"
            : "bg-pricing-card-gradient"
        }`}
      >
        <h2 className=" text-t-48 font-semibold font-poppins text-white leading-[91%] text-center">
          {title}
        </h2>
        <p className=" text-t-18 text-center font-medium text-white not-italic font-poppins">
          {subTitle}
        </p>
      </div>
      <div className=" py-5 px-8">
        <ul className=" space-y-3 pb-5 flex flex-col">
          {list.map((item) => (
            <li
              key={item}
              className=" text-white   text-[15px] xl:text-[18px] font-medium font-poppins inline-flex items-center gap-2"
            >
              <BsCheckLg /> <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className=" py-6">
          <h2 className=" text-center">
            <span className=" text-t-48 font-bold font-poppins">${price}</span>/
            <span className="text-t-24 font-normal font-poppins">month</span>
          </h2>
        </div>

        <button
          className={`capitalize w-full rounded-full   shadow-btn-shadow1 ${
            variant === "primary"
              ? "relative inline-flex rounded-[111px] h-[52px]  items-center justify-center   py-1.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              : "btn secondary-btn"
          }`}
        >
          {variant === "primary" ? (
            <span className="relative rounded-[111px]  grid place-items-center text-white font-bold  font-poppins mx-[2px]  h-[50px] transition-all ease-in duration-75 bg-skin-pricging-card-primary group-hover:bg-opacity-0 w-full capitalize">
              {title} now
            </span>
          ) : (
            `${title} now`
          )}
        </button>
      </div>
    </m.div>
  );
};
