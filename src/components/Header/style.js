import styled from "styled-components";

const Container = styled.div`
  height: 90px;
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

export { Container, Wrapper, Logo, Title };
