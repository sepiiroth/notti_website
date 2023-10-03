import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import insta from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";

const FooterContainer = styled.nav`
  padding: 30px 0px 30px 0px;
  background-color: ${colors.primary};
  color: ${colors.text};
`;

const LogoSM = styled.img`
  height: 25px;
  width: 25px;

  &:hover {
    height: 27px;
    width: 27px;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.text};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
    color: ${colors.underline};
  }
`;

const LogoContainer = styled.nav`
  width: 50px;
  text-align: center;
  height: 50px;
  padding: 10px;
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 50px;
`;
const CopyrightContainer = styled.nav`
  border-top: 1px ${colors.footer} solid;
  text-align: center;
`;

const CopyrightPart = styled.nav`
  width: 100%;
  text-align: center;
  margin-top: 55px;
`;

const LinkPart = styled.nav`
  margin-top: 65px;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <div>
          <LogoContainer>
            <a
              href="https://www.instagram.com/_u/notti.fr/"
              target="_blank"
              rel="noreferrer"
            >
              <LogoSM src={insta} alt="instagram" />
            </a>
          </LogoContainer>
        </div>
        <div>
          <LogoContainer>
            <a
              href="https://www.tiktok.com/@notti.fr"
              target="_blank"
              rel="noreferrer"
            >
              <LogoSM src={tiktok} alt="tiktok" />
            </a>
          </LogoContainer>
        </div>
      </SocialMediaContainer>
      <CopyrightContainer>
        <LinkPart>
          <StyledLink to="/">Mentions légales</StyledLink>
          <StyledLink to="/catalogue">CGV</StyledLink>
        </LinkPart>
        <CopyrightPart>
          Copyright © 2023. Tous droits réservés Notti
        </CopyrightPart>
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default Footer;
