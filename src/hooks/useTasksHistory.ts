import { useContext } from "react";
import { tasksHistory } from "../App";
function useTasksHistory() {
  return useContext(tasksHistory);
}

export { useTasksHistory };
