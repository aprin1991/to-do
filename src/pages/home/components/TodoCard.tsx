import React from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { editIcon } from "utilities/icons";
import { TaskProps } from "../types";

const TodoCard: React.FC<TaskProps> = ({ data }) => {
  const navigate = useNavigate();
  const trimString = (text: string) => {
    if (text?.length > 70) {
      return `${text?.slice(0, 67)}...`;
    } else {
      return text;
    }
  };
  const gotToTask = () => {
    const params: any = { id: data?.id, title: data?.title };
    navigate({
      pathname: `/task/${data?.id}`,
      search: `?${createSearchParams(params)}`,
    });
  };
  return (
    <div className="w-1/2 px-1 md:px-2 mb-4">
      <div className="bg-white p-2 rounded-md shadow-md ">
        <h4 className="text-black text-base font-semibold mb-2 truncate">
          {data?.title}
        </h4>
        <p className="text-xs mb-12 h-12 break-all">
          {trimString(data?.description)}
        </p>

        <div className="flex justify-between items-center">
          <span className="bg-primary px-6 py-1 rounded-md text-white text-xs capitalize">
            {data?.status}
          </span>
          <Link to={`/task/${data?.id}`}>
            <button onClick={gotToTask} className="text-xl w-6 h-6 ">
              {editIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
