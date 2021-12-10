import { useContext } from "react";
import { tasksHistoryDispatch } from "../App";
function useTaskHistoryDispatch() {
  return useContext(tasksHistoryDispatch);
}

export { useTaskHistoryDispatch };
