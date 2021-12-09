import React from "react";
import { IProps } from "./types";

export const Header: React.FC<IProps> = ({ title, classes }) => {
  return (
    <div className="text-center  w-full bg-primary text-white text-lg font-bold  px-16 py-5">
      header
    </div>
  );
};
