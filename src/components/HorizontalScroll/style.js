import { HEADER_HEIGHT } from "setup/variables";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: calc(100vh - ${HEADER_HEIGHT});
  overflow-x: auto;
  padding: 0 30px 90px 30px;
`;
