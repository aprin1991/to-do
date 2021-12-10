import React from "react";
import { TaskProps } from "../types";

const TodoCard: React.FC<TaskProps> = ({ data }) => {
  const trimString = (text: string) => {
    if (text?.length > 70) {
      return `${text?.slice(0, 67)}...`;
    } else {
      return text;
    }
  };
  return (
    <div className="w-1/2 px-1 md:px-2 mb-4">
      <div className="bg-white p-2 rounded-md shadow-md ">
        <h4 className="text-black text-base font-semibold mb-2 truncate">
          {data?.prev?.title !== data?.next?.title
            ? `${data?.prev?.title} --> ${data?.next?.title}`
            : data?.prev?.title}
        </h4>
        <p className="text-xs mb-12 h-12 break-all">
          {data?.prev?.description !== data?.next?.description
            ? `${trimString(
                data?.prev?.description
              )} description hass been changed`
            : trimString(data?.prev?.description)}
        </p>

        <div className="flex justify-between items-center">
          <span className="bg-primary px-6 py-1 rounded-md text-white text-xs capitalize">
            {data?.prev?.status !== data?.next?.status
              ? `${data?.prev?.status} --> ${data?.next?.status}`
              : data?.prev?.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
