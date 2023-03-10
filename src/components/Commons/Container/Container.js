import React from "react";

const Container = ({ children, height, id, bg }) => {
  return (
    <div
      id={id}
      className={`w-full ${
        height ? height : "h-auto"
      } ${bg} flex items-center overflow-x-hidden justify-start flex-col max-w-[1320px] px-1 xs:px-4 lg:px-6 `}
    >
      {children}
    </div>
  );
};

export default Container;
