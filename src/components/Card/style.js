import styled from "styled-components";

const Wrapper = styled.div`
  background-color: White;
  border-radius: 10px;
  padding: 10px;
  min-height: 60px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  cursor: pointer;
`;

const Title = styled.p`
  font-weight: 500;
  margin: 0 0 5px 0;
`;

const Description = styled.p`
  color: #4a4a4a;
  font-size: 13px;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  color: #4a4a4a;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
`;

export { Title, Description, Wrapper, Date };
