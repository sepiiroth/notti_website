import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logonotti.png";
import Panier from "../../assets/panier.png";
import colors from "../../utils/style/colors";

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393939;
  position: sticky;
  top: 0;
  z-index: 999;

  @media only screen and (max-width: 768px) {
    background-color: red;
  }
`;

const HomeLogo = styled.img`
  height: 50px;
  width: 65px;
`;

const PanierLogo = styled.img`
  height: 40px;
  width: 40px;

  &:hover {
    height: 42px;
    width: 42px;
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

const PanierContainer = styled.nav`
  width: 45px;
  text-align: center;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} alt="logo-notti" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/catalogue">Catalogue</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </div>
      <div>
        <PanierContainer>
          <Link to="/panier">
            <PanierLogo src={Panier} alt="panier" />
          </Link>
        </PanierContainer>
      </div>
    </NavContainer>
  );
}

export default Header;
