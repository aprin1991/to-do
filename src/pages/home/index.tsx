import React from "react";

import { PageTitle } from "components";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

const Home: React.FC = (props) => {
  return (
    <div className="text-center h-screen w-full">
      <PageTitle title="Home" />
      <AddTask />
      <TasksList />
    </div>
  );
};

export default Home;
