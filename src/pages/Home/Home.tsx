import { FormEvent, useState } from "react";

import Button from "@/components/Button/Button";
import TextInput from "@/components/TextInput/TextInput";
import Header from "@/components/Header/Header";
import { ReactComponent as Plus } from "@/assets/plus.svg";

import * as S from "./Home.styles";

const Home = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasksList, setTaskList] = useState<Array<string>>([]);

  const onAddTask = (e: FormEvent) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, newTaskText]);
    setNewTaskText("");
  };

  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        <S.TaskCreatorForm onSubmit={onAddTask}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={setNewTaskText}
          />
          <Button type="submit">
            Criar <Plus />
          </Button>
        </S.TaskCreatorForm>
        {tasksList.length
          ? tasksList.map((task) => <p>{task}</p>)
          : "Você ainda não tem tasks cadastradas"}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Home;
