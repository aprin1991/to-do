import { useContext } from "react";
import { tasks } from "../App";
function useTask() {
  return useContext(tasks);
}

export { useTask };
