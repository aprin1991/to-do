import { useTasksHistory } from "hooks";
import React from "react";
import map from "lodash/map";
import TodoCard from "./TodoCard";
const TasksList: React.FC = () => {
  let tasksList = useTasksHistory();
  //   let tasksList = [];

  console.log(tasksList);
  return (
    <div className="todo-list-wrapper bg-primary text-left mt-4">
      <h4 className="text-white text-xl mb-4 px-9">Tasks</h4>
      <div className="todo-container flex justify-start items-start flex-wrap p-4 md:py-12 md:px-8">
        {tasksList?.length > 0 ? (
          map(tasksList, (task) => <TodoCard key={task?.id} data={task} />)
        ) : (
          <div className="text-xl font-medium flex justify-center items-center text-center w-full h-72">
            You have nothing to do.
            <br /> Go get some sleep
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksList;
