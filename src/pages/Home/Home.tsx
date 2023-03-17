import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Header from "@/components/Header/Header";

import { ReactComponent as Plus } from "@/assets/plus.svg";
import { ReactComponent as Notebook } from "@/assets/notebook.svg";

import * as S from "./Home.styles";
import Task from "@/components/Task/Task";
import EmptyList from "@/components/EmptyList/EmptyList";

type TaskType = {
  id: string;
  text: string;
  isChecked: boolean;
};

const Home = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasksList, setTaskList] = useState<Array<TaskType>>([]);

  const onAddTask = (e: FormEvent) => {
    e.preventDefault();
    setTaskList((prev) => [
      ...prev,
      { id: uuidv4(), text: newTaskText, isChecked: false },
    ]);
    setNewTaskText("");
  };

  const onDeleteTask = (taskId: string) => {
    setTaskList((prev) => prev.filter(({ id }) => id !== taskId));
  };

  const onCheckTask = (taskId: string) => {
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;
        return { ...task, isChecked: !task.isChecked };
      })
    );
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
