import { TaskType } from "@/pages/Home/Home";

const useTasksList = () => {
  const getTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasksList") ?? "[]";
    return JSON.parse(tasks) as TaskType[];
  };

  const updateTasksListOnLocalStorage = (newList: TaskType[]) => {
    localStorage.setItem("tasksList", JSON.stringify(newList));
  };

  return { getTasksFromLocalStorage, updateTasksListOnLocalStorage };
};

export default useTasksList;
