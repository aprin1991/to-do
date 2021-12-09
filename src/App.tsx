import "styles/global.scss";

import Home from "pages/home";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TaskDetail from "pages/task-edit";

export const tasks = createContext<any | undefined>([]);
export const taskDispatch = createContext<any | undefined>([]);
function App(): JSX.Element {
  const [state, setState] = useState([]);
  return (
    <tasks.Provider value={state}>
      <taskDispatch.Provider value={setState}>
        <div className="max-w-screen-sm mx-auto min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task/:id" element={<TaskDetail />} />
          </Routes>
        </div>
      </taskDispatch.Provider>
    </tasks.Provider>
  );
}

export default App;
