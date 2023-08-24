import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-4 lg:px-24 mx-auto 2xl:px-0 lg:max-w-[1320px] ${className} `}
    >
      {children}
    </div>
  );
}
