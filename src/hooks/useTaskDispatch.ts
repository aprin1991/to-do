import { useContext } from "react";
import { taskDispatch } from "../App";
function useTaskDispatch() {
  return useContext(taskDispatch);
}

export { useTaskDispatch };
