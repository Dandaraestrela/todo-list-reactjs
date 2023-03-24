import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Task from "@/components/Task/Task";
import EmptyList from "@/components/EmptyList/EmptyList";
import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Header from "@/components/Header/Header";
import useTasksList from "@/hooks/useTasksList";

import { ReactComponent as Plus } from "@/assets/plus.svg";

import * as S from "./Home.styles";

export type TaskType = {
  id: string;
  text: string;
  isChecked: boolean;
};

const Home = () => {
  const { getTasksFromLocalStorage, updateTasksListOnLocalStorage } =
    useTasksList();
  const [newTaskText, setNewTaskText] = useState("");
  const [tasksList, setTaskList] = useState<Array<TaskType>>(
    getTasksFromLocalStorage()
  );

  const onAddTask = (e: FormEvent) => {
    e.preventDefault();
    const newTask = { id: uuidv4(), text: newTaskText, isChecked: false };
    updateTasksListOnLocalStorage([...tasksList, newTask]);
    setTaskList((prev) => [newTask, ...prev]);

    setNewTaskText("");
  };

  const onDeleteTask = (taskId: string) => {
    const newTaskList = tasksList.filter(({ id }) => id !== taskId);
    updateTasksListOnLocalStorage(newTaskList);
    setTaskList(newTaskList);
  };

  const onCheckTask = (taskId: string) => {
    let newTaskList = [...tasksList];
    const updatedElementIndex = tasksList.findIndex(({ id }) => id === taskId);
    const firstCheckedTaskIndex = tasksList.findIndex(
      ({ isChecked }) => isChecked === true
    );
    const isCheckingTask = !tasksList[updatedElementIndex].isChecked;

    if (
      tasksList.length === 1 ||
      (!isCheckingTask && updatedElementIndex === firstCheckedTaskIndex)
    ) {
      newTaskList[updatedElementIndex].isChecked =
        !newTaskList[updatedElementIndex].isChecked;
      updateTasksListOnLocalStorage(newTaskList);
      setTaskList(newTaskList);
      return;
    }

    if (!isCheckingTask) {
      const [updatedElement] = newTaskList.splice(updatedElementIndex, 1);
      newTaskList.splice(firstCheckedTaskIndex, 0, {
        ...updatedElement,
        isChecked: false,
      });
      updateTasksListOnLocalStorage(newTaskList);
      setTaskList(newTaskList);
      return;
    }

    if (firstCheckedTaskIndex === -1) {
      const [updatedElement] = newTaskList.splice(updatedElementIndex, 1);
      newTaskList.push({
        ...updatedElement,
        isChecked: !updatedElement.isChecked,
      });
    } else {
      const [updatedElement] = newTaskList.splice(updatedElementIndex, 1);
      newTaskList.splice(firstCheckedTaskIndex - 1, 0, {
        ...updatedElement,
        isChecked: !updatedElement.isChecked,
      });
    }
    updateTasksListOnLocalStorage(newTaskList);
    setTaskList(newTaskList);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        <S.TaskCreatorForm onSubmit={onAddTask}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            required
          />
          <Button type="submit">
            Criar <Plus />
          </Button>
        </S.TaskCreatorForm>
        <S.TaskListWrapper>
          {tasksList.length ? (
            tasksList.map(({ id, text, isChecked }) => (
              <Task
                key={id}
                id={id}
                text={text}
                isChecked={isChecked}
                onCheck={onCheckTask}
                onDelete={onDeleteTask}
              />
            ))
          ) : (
            <EmptyList />
          )}
        </S.TaskListWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;
