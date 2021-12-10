import { PageTitle } from "components";
import React from "react";
import TasksList from "./components/TasksList";
const TasksHistories: React.FC = () => {
  return (
    <div className="text-center h-screen w-full">
      <PageTitle title="History" />
      <TasksList />
    </div>
  );
};

export default TasksHistories;
