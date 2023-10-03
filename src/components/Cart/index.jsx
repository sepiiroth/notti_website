import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../utils/contexts/CartContext";
import { ModalContext } from "../../utils/contexts/ModalContext";
import quit from "../../assets/quit_button.png";
import trash from "../../assets/trash_button.png";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
const ContainerTop = styled.div`
  height: 108px;
  position: sticky;
  top: 0;
  background-color: ${colors.background};
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const LittleTitlePart = styled.div``;
const ProductTitle = styled.span`
  float: left;
  font-size: 0.78rem;
`;
const TotalTitle = styled.span`
  float: right;
  font-size: 0.78rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100%;
  background-color: ${colors.background};
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-out;
`;

const ContainerProduct = styled.tbody`
  display: block;
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  width: 100%;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const Button = styled.button`
  background-color: ${colors.secondary_text};
  color: ${colors.background};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  width: 100%;
  height: 50px;
  border: none;
  text-align: center;
  border-radius: 50px;

  &:hover {
    box-shadow: 0 0 0 1px ${colors.secondary_text};
  }
`;

const TitlePart = styled.div`
  height: 55px;
  color: ${colors.secondary_text};
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 100%;

  h2 {
    color: ${colors.secondary_text};
    font-weight: bold;
    font-size: 1.5rem;
    margin: 20px;
  }

  button {
    width: 100%;
  }
`;

const Title = styled.h1`
  float: left;
  font-family: "Questrial", sans-serif;
  font-weight: bold;
  font-size: 1.7rem;
`;
const Quit = styled.img`
  float: right;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const TdDetails = styled.td`
  width: auto;
  grid-column: 2 / 4;
  color: ${colors.secondary_text};
`;

const TdTotals = styled.td`
  pointer-events: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  color: ${colors.secondary_text};
  font-weight: bold;
`;

const ImageProduct = styled.img`
  width: 105px;
  height: 92px;
`;

const Trash = styled.img`
  float: right;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const TdQuantity = styled.td`
  padding-top: 0px;
  grid-column: 2 / 5;
`;

const TrProduct = styled.tr`
  display: grid;
  grid-template: repeat(2, auto) / repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 0;
`;

const TdMedia = styled.td`
  grid-row: 1 / 3;
  cursor: pointer;
`;

const TitleDetail = styled.div`
  cursor: pointer;
  color: ${colors.secondary_text};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const ContainerTotal = styled.div`
  align-self: flex-end;
  background-color: ${colors.background};
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const TotalTitleBot = styled.h2`
  float: left;
  font-size: 1.2rem;
  height: 20px;
  color: ${colors.secondary_text};
  font-weight: bold;
`;

const SpanTotal = styled.small`
  margin: 1.2rem 0 1rem auto;
  text-align: left;
  color: ${colors.secondary_text};
`;

const Price = styled.span`
  float: right;
  font-size: 1.2rem;
  color: ${colors.secondary_text};
  height: 20px;
`;

const ContainerTopEmpty = styled.div`
  height: 108px;
  position: sticky;
  top: 0;
  background-color: ${colors.background};
  padding: 20px;
`;

function ProductRow({
  product,
  updateQuantity,
  removeFromCart,
  handleProductClick,
  index,
  cart,
}) {
  return (
    <TrProduct key={`${product.name}-${index}`} className="cart-item">
      <TdMedia onClick={() => handleProductClick(product.id)}>
        <ImageProduct
          src={product.cover[product.imageIndex]}
          alt={product.name}
          className="cart-item-image"
        />
      </TdMedia>

      <TdDetails className="cart-item-details">
        <TitleDetail onClick={() => handleProductClick(product.id)}>
          {product.name}
        </TitleDetail>
        <div>Taille: {product.selectedSize}</div>
        <div>Couleur: {product.selectedColor}</div>
        <div>Style: {product.selectedStyle}</div>
      </TdDetails>
      <TdTotals>
        <div>{product.price}€</div>
      </TdTotals>
      <TdQuantity>
        <div className="d-flex align-items-center">
          <div
            className=""
            style={{
              width: "100%",
              display: "inline-flex",
            }}
          >
            <button
              className="btn btn-outline-secondary"
              onClick={() => updateQuantity(index, product.quantity - 1)}
              disabled={product.quantity <= 1}
            >
              -
            </button>
            <input
              type="number"
              style={{
                width: "50%",
                WebkitAppearance: "none",
                MozAppearance: "textfield",
              }}
              className="form-control mx-2"
              value={product.quantity}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => updateQuantity(index, product.quantity + 1)}
            >
              +
            </button>
          </div>
          <Trash
            src={trash}
            alt="Retirer"
            onClick={() => removeFromCart(index)}
          />
        </div>
      </TdQuantity>
    </TrProduct>
  );
}

function HeaderModal({ toggleModal }) {
  return (
    <ContainerTop>
      <TitlePart>
        <Title>Votre panier</Title>
        <Quit src={quit} alt="Fermer" onClick={toggleModal} />
      </TitlePart>
      <LittleTitlePart>
        <ProductTitle>PRODUIT</ProductTitle>
        <TotalTitle>TOTAL</TotalTitle>
      </LittleTitlePart>
    </ContainerTop>
  );
}

function FooterModal({ total }) {
  return (
    <ContainerTotal>
      <div style={{ height: "35px", width: "100%" }}>
        <TotalTitleBot>Total estimé</TotalTitleBot>
        <Price>€{total}</Price>
      </div>
      <SpanTotal>
        Taxe incluse, frais d’expédition et réductions calculés à l’étape du
        paiement
      </SpanTotal>
      <ButtonDiv>
        <Button>Procéder au paiement</Button>
      </ButtonDiv>
    </ContainerTotal>
  );
}

function HeaderModalEmpty({ toggleModal }) {
  return (
    <ContainerTopEmpty>
      <TitlePart>
        <Quit src={quit} alt="Fermer" onClick={toggleModal} />
      </TitlePart>
    </ContainerTopEmpty>
  );
}

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const { isModalOpen, toggleModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const handleProductClick = (productId) => {
    toggleModal();
    navigate(`/product/${productId}`);
  };

  const total = cart
    .reduce(
      (acc, product) =>
        acc + product.quantity * parseFloat(product.price.replace(",", ".")),
      0
    )
    .toFixed(2);

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && <Overlay onClick={handleOverlayClick} />}
      {cart.length > 0 ? (
        <ModalContainer isOpen={isModalOpen}>
          <HeaderModal toggleModal={toggleModal} />
          <ContainerProduct>
            <ul>
              {cart.map((product, index) => (
                <ProductRow
                  key={`${product.name}-${index}`}
                  product={product}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                  handleProductClick={handleProductClick}
                  index={index}
                  cart={cart}
                />
              ))}
            </ul>
          </ContainerProduct>
          <FooterModal total={total} />
        </ModalContainer>
      ) : (
        <ModalContainer isOpen={isModalOpen}>
          <HeaderModalEmpty toggleModal={toggleModal} />
          <EmptyContainer>
            <h2>Votre panier est vide</h2>
            <Link to="/collections/all">
              <Button onClick={toggleModal}>Continuer les achats</Button>
            </Link>
          </EmptyContainer>
        </ModalContainer>
      )}
    </>
  );
}

export default Cart;
