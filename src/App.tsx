import "styles/global.scss";

import Home from "pages/home";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TaskDetail from "pages/task-edit";
import TasksHistories from "pages/history";

export const tasks = createContext<any | undefined>([]);
export const taskDispatch = createContext<any | undefined>([]);

export const tasksHistory = createContext<any | undefined>([]);
export const tasksHistoryDispatch = createContext<any | undefined>([]);
function App(): JSX.Element {
  const [state, setState] = useState([]);
  const [taskHistory, setTaskHistory] = useState([]);
  return (
    <tasks.Provider value={state}>
      <taskDispatch.Provider value={setState}>
        <tasksHistory.Provider value={taskHistory}>
          <tasksHistoryDispatch.Provider value={setTaskHistory}>
            <div className="max-w-screen-sm mx-auto min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/:id" element={<TaskDetail />} />
                <Route path="/histories" element={<TasksHistories />} />
              </Routes>
            </div>
          </tasksHistoryDispatch.Provider>
        </tasksHistory.Provider>
      </taskDispatch.Provider>
    </tasks.Provider>
  );
}

export default App;
