import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  margin-bottom: 15px;
  background-color: #d6e0f3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

const Title = styled.div`
  color: #063489;

  span {
    width: 18px;
    height: 18px;
    line-height: 16px;
    background-color: #1e4fa7;
    border-radius: 12px;
    display: inline-block;
    text-align: center;
    color: #fff;
  }
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
  background-color: #5eae57;
  height: 35px;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 25px;
  margin-left: 8px;
  cursor: pointer;
`;

export { Title, Wrapper, ButtonWrap, CloseButton, AddButton };
