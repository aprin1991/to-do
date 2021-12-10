import RippleButton from "button";
import { PageTitle } from "components";
import {
  useComponentVisible,
  useTask,
  useTaskDispatch,
  useTaskHistoryDispatch,
  useTasksHistory,
} from "hooks";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { arrowDown, editIcon } from "utilities/icons";

import map from "lodash/map";
import filter from "lodash/filter";
import { calcStatus } from "utilities/functions/Helper";
const TaskDetail: React.FC = (props) => {
  let tasksList = useTask() || [];
  let taskDispatch = useTaskDispatch();
  let taskHistoryDispatch = useTaskHistoryDispatch();
  let taskHistory = useTasksHistory();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  let navigate = useNavigate();
  let { id } = useParams();
  const [task, setTask] = useState<undefined | object>();
  const [currentState, setCurrentState] = useState("");
  const [statuses, setStatuses] = useState<
    undefined | Array<{ id: number; title: string }>
  >([]);

  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({ title: "", description: "" });

  useEffect(() => {
    const findIndex = tasksList.findIndex((el) => el?.id === +id);
    if (findIndex > -1) {
      setStatuses(calcStatus(tasksList[findIndex]?.status));
      setTask(tasksList[findIndex]);
      setValues({
        title: tasksList[findIndex].title,
        description: tasksList[findIndex].description,
      });
      setCurrentState(tasksList[findIndex].status);
    } else {
      closeTask();
    }
  }, [id]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleEditTask = (e) => {
    e.preventDefault();
    setErrors({ title: "", description: "" });
    if (values?.title?.trim() === "") {
      setErrors({ ...errors, title: "Please Enter the Title of Task" });
    } else if (values?.description?.trim() === "") {
      setErrors({
        ...errors,
        description: "Please Enter the Description of Task",
      });
    } else {
      let cloneTasks = [...tasksList];
      const findIndex = tasksList.findIndex((el) => el?.id === +id);
      const obj = {
        id: tasksList[findIndex]?.id,
        title: values?.title,
        description: values?.description,
        status: currentState,
      };
      if (currentState === "deployed") {
        cloneTasks = filter(
          cloneTasks,
          (el) => el.id !== tasksList[findIndex]?.id
        );
      } else {
        cloneTasks[findIndex] = obj;
      }
      taskDispatch(cloneTasks);
      if (
        tasksList[findIndex]?.status !== currentState ||
        tasksList[findIndex]?.title !== values?.title ||
        tasksList[findIndex]?.title !== values?.description
      ) {
        let history = {
          prev: tasksList[findIndex],
          next: obj,
        };

        taskHistoryDispatch([...taskHistory, history]);
      }

      closeTask();
    }
  };
  console.log(taskHistory);
  const handleSelectStatus = (status: { title: string; id: number }) => {
    setCurrentState(status?.title);
    setIsComponentVisible(false);
  };
  const closeTask = () => {
    navigate("/");
  };
  return (
    <div className="text-center h-screen w-full">
      <PageTitle title={`Edit`} />
      <div className="px-8 mt-4">
        <h2 className="text-bold text-2xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleEditTask}>
          <div
            className={`flex flex-col text-input ${
              values?.title?.trim() !== "" ? "active" : ""
            }`}
          >
            <input
              name="title"
              onChange={handleChange}
              value={values?.title}
              className="bg-gray-200 w-full border-b border-black p-3 mb-0"
            />
            <label>Title</label>
            <span className="text-xs text-red-500 font-medium  h-3 mb-2 text-left">
              {errors?.title}
            </span>
          </div>
          <div
            className={`flex flex-col text-input ${
              values?.title?.trim() !== "" ? "active" : ""
            }`}
          >
            <textarea
              name="description"
              onChange={handleChange}
              value={values?.description}
              className="w-full h-28 bg-gray-200 resize-none w-full  p-3 mb-0 "
              style={{ minHeight: "55vh" }}
            ></textarea>
            <label>Description</label>
            <span className="text-xs text-red-500 font-medium h-3 mb-2 text-left">
              {errors?.description}
            </span>
          </div>
          <div className="relative " ref={ref}>
            <span
              className="bg-gray-200 w-full border-b border-black p-3 mb-1 flex justify-between items-center cursor-pointer"
              onClick={() => setIsComponentVisible((prev) => !prev)}
            >
              <span>{currentState}</span>
              <span className="w-8 h-8">{arrowDown}</span>
            </span>
            <div
              className={`status-list absolute left-0 top-0 w-full shadow-lg ${
                isComponentVisible ? "show" : ""
              }`}
            >
              {map(statuses, (status) => {
                return (
                  <div
                    key={status?.id}
                    onClick={() => handleSelectStatus(status)}
                    className="cursor-pointer p-2 text-gray-800"
                  >
                    {status?.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between items-center py-2 md:py-0 flex-wrap">
            <div className="w-full md:w-1/2 mb-2 md:mb-0 md:pr-2">
              <RippleButton
                type="submit"
                classes="w-full bg-primary p-3 text-white font-semibold text-base text-center rounded-md"
              >
                <div className="flex justify-center items-center w-full">
                  <span className="w-6 h-6 mr-4">{editIcon}</span>
                  Edit
                </div>
              </RippleButton>
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <RippleButton
                classes="w-full bg-white border border-gray-200  p-3 text-gray-600 font-semibold text-base text-center rounded-md"
                onClick={closeTask}
              >
                Cancel
              </RippleButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetail;
