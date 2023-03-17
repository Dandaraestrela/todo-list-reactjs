import styled from "styled-components";

import EmptyListImage from "@/assets/emptylist.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: "100%";
  padding: 48px 24px;
  gap: 16px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme: { colors } }) => colors.gray300};
`;

const EmptyList = () => {
  return (
    <Wrapper>
      <img src={EmptyListImage} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas!</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </Wrapper>
  );
};

export default EmptyList;
