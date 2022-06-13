import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 600px;
  min-height: 400px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  padding: 0 15px 15px;
`;

const Close = styled.div`
  display: flex;
  font-size: 25px;
  justify-content: flex-end;
  cursor: pointer;
  padding: 10px;
`;
export { Wrapper, ModalContent, Close };
