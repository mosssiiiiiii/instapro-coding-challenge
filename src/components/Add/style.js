import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  margin-bottom: 15px;
  background-color: #d0d8e6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

const Title = styled.div`
  color: #063489;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: #1e4fa7;
  cursor: pointer;
`;

const AddButton = styled.button`
  background-color: #1e4fa7;
  height: 35px;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 25px;
  margin-left: 8px;
  cursor: pointer;
`;

export { Title, Wrapper, ButtonWrap, CloseButton, AddButton };
