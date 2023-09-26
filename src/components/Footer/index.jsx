import { Link } from "react-router-dom";
import styled from "styled-components";
import Panier from "../../assets/panier.png";
import colors from "../../utils/style/colors";

const FooterContainer = styled.nav`
  padding: 30px 0px 30px 0px;
  background-color: #393939;
`;

const LogoSM = styled.img`
  height: 30px;
  width: 30px;

  &:hover {
    height: 32px;
    width: 32px;
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
margin-top: 60px;`;
const CopyrightContainer = styled.nav`
border-top: 1px ${colors.text} solid;
text-align: center;`;

const CopyrightPart = styled.nav`

width: 100%;
text-align: center;
margin-top: 55px;
`; 

const LinkPart = styled.nav`
  margin-top: 65px;
`

function Footer() {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <div>
        <LogoContainer>
          <Link to="/panier">
            <LogoSM src={Panier} alt="instagram" />
          </Link>
        </LogoContainer>
        </div>
        <div>
        <LogoContainer>
        <Link to="/panier">
            <LogoSM src={Panier} alt="tiktok" />
          </Link>
        </LogoContainer>
        </div>
      </SocialMediaContainer>
      <CopyrightContainer>
        <LinkPart>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/catalogue">Catalogue</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          </LinkPart>
        <CopyrightPart>
          Copyright
        </CopyrightPart>
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default Footer;
