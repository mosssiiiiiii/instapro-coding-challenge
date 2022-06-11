import { memo } from "react";
import { LOGO_URL } from "setup/constant";
import { Container, Wrapper, Logo, Title } from "./style";

const Header = () => {
  return (
    <Container data-testid="header">
      <Wrapper>
        <Logo>
          <img alt="logo" src={LOGO_URL} />
          <Title>
            <h1>Instapro Code Challenge</h1>
            <span>Trello simulator</span>
          </Title>
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
