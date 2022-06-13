import { memo } from "react";
import { GITHUB_LINK, LOGO_URL } from "setup/constant";
import {
  Container,
  Wrapper,
  Logo,
  Title,
  IconWrap,
  Icon,
  AboutUs,
} from "./style";
import { ReactComponent as Setting } from "assets/setting.svg";
import { ReactComponent as Profile } from "assets/profile.svg";
import { ReactComponent as Option } from "assets/options.svg";

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
        <IconWrap>
          <Icon>
            <Setting width={28} height={28} />
          </Icon>
          <AboutUs target="_blank" href={GITHUB_LINK}>
            Github Link
          </AboutUs>
          <Icon>
            <Profile width={28} height={28} />
          </Icon>
          <Icon>
            <Option width={28} height={28} fill="#df4525" />
          </Icon>
        </IconWrap>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
