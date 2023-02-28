import React from "react";

const Container = ({ children, height, id }) => {
  return (
    <div
      id={id}
      className={`w-full ${
        height ? height : "h-auto"
      } flex items-center justify-start flex-col max-w-7xl px-1 xs:px-4 lg:px-6 `}
    >
      {children}
    </div>
  );
};

export default Container;
