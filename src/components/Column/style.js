import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 250px;
  display: block;
  margin-right: 15px;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
  color: #1e4fa7;
`;

const ColumnItem = styled.div`
  background-color: #d7d9ec63;
  min-height: 50px;
  padding: 15px 15px 0 15px;
  border-radius: 10px;
  max-height: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  $::-webkit-scrollbar-track {
    background: #e3e3e3;
    border-radius: 0 15px 15px 0;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d3d3d3;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c3c3c3;
  }
`;

export { Wrapper, Title, ColumnItem };
