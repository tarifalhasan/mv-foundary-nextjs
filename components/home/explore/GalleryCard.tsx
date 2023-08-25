import React from "react";

interface GalleryCardProps {
  bg?: string;
  title: string;
  description: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  bg = "bg-skin-secondary",
  title,
  description,
}) => {
  return (
    <div className={`${bg} rounded-[16px]  p-4 space-y-1  sm:space-y-3`}>
      <h2 className=" text-t-24 font-bold font-poppins text-white">{title}</h2>
      <p className=" text-t-13 sm:text-t-16 font-medium text-white font-poppins">
        {description}
      </p>
    </div>
  );
};

export default GalleryCard;
