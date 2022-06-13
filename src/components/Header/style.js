import { HEADER_HEIGHT } from "setup/variables";
import styled from "styled-components";

const Container = styled.div`
  height: ${HEADER_HEIGHT};
  padding: 15px 30px 0 30px;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 75px;
  border-radius: 16px;
  box-shadow: -2px 2px 20px -11px rgba(0, 0, 0, 0.15);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    margin-right: 15px;
  }
`;

const Title = styled.div`
  h1 {
    margin: 0;
    font-size: 24px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.div`
  border: 1px solid #4a4a4a;
  border-radius: 6px;
  padding: 3px 5px;
  margin-left: 15px;
`;

const AboutUs = styled.a`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  border-radius: 6px;
  background-color: #1e4fa7;
  color: #fff;
  margin-left: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export { Container, Wrapper, Logo, Title, IconWrap, Icon, AboutUs };
