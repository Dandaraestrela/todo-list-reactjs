import { ReactComponent as Trash } from "@/assets/trash.svg";
import { Checkbox } from "@/components/Checkbox/Checkbox";

import * as S from "./Task.styles";

interface TaskProps {
  id: string;
  text: string;
  isChecked: boolean;
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

const Task = ({ id, text, isChecked, onCheck, onDelete }: TaskProps) => (
  <S.Wrapper isChecked={isChecked}>
    <Checkbox isChecked={isChecked} onClickFunc={() => onCheck(id)} />
    <S.TaskText isChecked={isChecked}>{text}</S.TaskText>
    <S.TrashButton onClick={() => onDelete(id)}>
      <Trash />
    </S.TrashButton>
  </S.Wrapper>
);

export default Task;
