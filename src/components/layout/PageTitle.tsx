import React from "react";
import { PageTitleProps } from "./types";

export const PageTitle: React.FC<PageTitleProps> = ({ title, classes }) => {
  return (
    <header
      className={`text-center  w-full bg-primary text-white text-lg font-bold  px-8 py-5 ${classes}`}
    >
      <h1 className="text-white text-left flex justify-start items-center">
        <span className="mr-1">{`Task Management >`} </span>
        {title}
      </h1>
    </header>
  );
};
