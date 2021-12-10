import React from "react";

import { PageTitle } from "components";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { Link } from "react-router-dom";

const Home: React.FC = (props) => {
  return (
    <div className="text-center h-screen w-full">
      <PageTitle title="Home" />
      <div className="text-right mt-4">
        <Link to="/histories">
          <span className="bg-primary text-white rounded-md px-8 py-1">
            history
          </span>
        </Link>
      </div>
      <AddTask />
      <TasksList />
    </div>
  );
};

export default Home;
