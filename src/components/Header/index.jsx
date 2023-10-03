import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import colors from "../../utils/style/colors";
import logo from "../../assets/logonotti.png";
import panier from "../../assets/panier.png";

import { ModalContext } from "../../utils/contexts/ModalContext";
import { CartContext } from "../../utils/contexts/CartContext";

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  position: sticky;
  top: 0;
  z-index: 999;
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
    cursor: pointer;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 15px;
  color: ${colors.text};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
    color: ${colors.underline};
  }

  &.active {
    text-decoration: underline;
    color: ${colors.underline};
  }
`;

const PanierContainer = styled.nav`
  width: 45px;
  text-align: center;
`;

const SpanNumber = styled.span`
  font-size: 12px;
  background-color: ${colors.cartlist_background};
  padding-right: 1px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  color: ${colors.cartlist_text};
  z-index: 2;
  border-radius: 20px;
  position: absolute;
  right: 28px;
  top: 62px;
`;

function Header() {
  const { toggleModal } = useContext(ModalContext);
  const { cart } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  return (
    <NavContainer>
      <NavLink to="/">
        <HomeLogo src={logo} alt="logo-notti" />
      </NavLink>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="collections/all">Catalogue</StyledLink>
      </div>
      <div>
        <PanierContainer>
          <PanierLogo src={panier} alt="panier" onClick={toggleModal} />
          {totalItems > 0 && <SpanNumber>{totalItems}</SpanNumber>}
        </PanierContainer>
      </div>
    </NavContainer>
  );
}

export default Header;
