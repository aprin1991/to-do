import RippleButton from "button";
import { useTask, useTaskDispatch } from "hooks";
import React, { useState } from "react";
import { plusIcon } from "utilities/icons";

const AddTask: React.FC = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({ title: "", description: "" });
  let taskDispatch = useTaskDispatch();
  let tasksList = useTask();
  const handleAddTask = (e) => {
    setErrors({ title: "", description: "" });
    e.preventDefault();
    if (values?.title?.trim() === "") {
      setErrors({ ...errors, title: "Please Enter the Title of Task" });
    } else if (values?.description?.trim() === "") {
      setErrors({
        ...errors,
        description: "Please Enter the Description of Task",
      });
    } else {
      setErrors({ title: "", description: "" });
      const obj = {
        id: +new Date().getTime(),
        title: values?.title,
        description: values?.description,
        status: "todo",
      };
      taskDispatch([obj, ...tasksList]);
      setValues({ title: "", description: "" });
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="px-8 py-9">
      <h2 className="text-xl font-bold text-black mb-4">Add a new Task</h2>
      <form onSubmit={handleAddTask}>
        <div
          className={`flex flex-col text-input ${
            values?.title?.trim() !== "" ? "active" : ""
          }`}
        >
          <input
            name="title"
            onChange={handleChange}
            value={values?.title}
            className="bg-gray-200 w-full border-b border-black p-3 mb-1"
          />
          <label>Title</label>
          <span className="text-xs text-red-500 font-medium  h-4 mb-2 text-left">
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
            className="w-full h-28 bg-gray-200 resize-none w-full border-b border-black p-3 mb-1 "
          ></textarea>
          <label>Description</label>
          <span className="text-xs text-red-500 font-medium h-4 mb-2 text-left">
            {errors?.description}
          </span>
        </div>
        <RippleButton
          type="submit"
          classes="w-full bg-primary p-3 text-white font-semibold text-base text-center rounded-md"
        >
          <div className="flex justify-center items-center w-full">
            <span className="w-6 h-6 mr-4">{plusIcon}</span>
            Add
          </div>
        </RippleButton>
      </form>
    </div>
  );
};

export default AddTask;
