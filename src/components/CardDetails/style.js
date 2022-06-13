import styled from "styled-components";

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  color: #1e4fa7;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 30;
`;

const TitleWrap = styled.div`
  margin-bottom: 15px;
`;

const Select = styled.select`
  width: 250px;
  height: 36px;
  padding: 0 5px;
  float: right;
`;

export { Title, Description, TitleWrap, Select };
