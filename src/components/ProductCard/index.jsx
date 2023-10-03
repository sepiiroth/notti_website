import { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ButtonGroup, Button } from "react-bootstrap";
import { CartContext } from "../../utils/contexts/CartContext";
import colors from "../../utils/style/colors";

const BaseButton = styled(Button)`
  background-color: ${colors.background};
  color: ${colors.secondary_text};
  border-radius: 30px;
  border: solid ${colors.secondary_text} 1px;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background-color: ${colors.background};
    color: ${colors.secondary_text};
    border: solid ${colors.secondary_text} 1px;
    box-shadow: 0 0 0 1px ${colors.secondary_text};
  }

  &:active,
  &.active,
  &:disabled {
    background-color: ${colors.secondary_text} !important;
    color: ${colors.background} !important;
    border-color: ${colors.background} !important;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

const OptionButton = styled(BaseButton)`
  width: 4rem;
`;

const PanierButton = styled(BaseButton)`
  width: 80%;
`;

const StyledCarrousel = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 30px;
  margin-bottom: 5px;
`;

const StyledCarrouselItem = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 20px;
  margin-bottom: 150px;
`;

const DivCarrouselItem = styled.div`
  width: 100%;
  display: inline;
`;

const ImageTest = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 30px;
  margin: 5px;
`;

const Container = styled.div`
  h5 {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: ${colors.primary};
  }
`;

function ProductCard({ product, part }) {
  const [selectedSize, setSelectedSize] = useState("");

  const [selectedStyle, setSelectedStyle] = useState(
    product.design === 0 ? "Plein" : ""
  );

  const [selectedColor, setSelectedColor] = useState(
    product.color === 0 ? "Blanc" : product.color === 1 ? "Noir" : ""
  );

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // État pour la quantité
  const isSelectionComplete = selectedSize && selectedStyle && selectedColor;

  const format = product.description.replace(/\n/g, "<br />");

  const sizeArray =
    product.size === 0
      ? ["S"]
      : product.size === 1
      ? ["S", "M"]
      : product.size === 2
      ? ["S", "M", "L"]
      : product.size === 3
      ? ["S", "M", "L", "XL"]
      : null;

  const colorArray =
    product.color === 0
      ? ["Blanc"]
      : product.color === 1
      ? ["Noir"]
      : product.color === 2
      ? ["Blanc", "Noir"]
      : null;

  const styleArray = product.design === 0 ? ["Plein"] : ["Plein", "Vide"];

  // Fonction pour gérer la sélection de la taille
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Fonction pour gérer la sélection du style
  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    updateImage(selectedColor, style);
  };

  // Fonction pour gérer la sélection de la couleur
  const handleColorChange = (color) => {
    setSelectedColor(color);
    updateImage(color, selectedStyle);
  };

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const updateImage = (color, style) => {
    if (color === "Blanc" && style === "Plein") {
      setMainImageIndex(0);
    } else if (color === "Noir" && style === "Plein") {
      setMainImageIndex(2);
    } else if (color === "Blanc" && style === "Vide") {
      setMainImageIndex(4);
    } else if (color === "Noir" && style === "Vide") {
      setMainImageIndex(6);
    }
  };

  // Fonction pour augmenter la quantité
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Fonction pour diminuer la quantité
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Assurez-vous que la quantité reste au moins 1
  };

  // Fonction pour gérer la modification de la quantité via l'input
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const { addToCart } = useContext(CartContext);

  // Fonction pour ajouter le produit au panier
  const addToCartHandler = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      cover: product.cover,
      quantity,
      selectedSize,
      selectedStyle,
      selectedColor,
      imageIndex: mainImageIndex,
    };
    addToCart(productToAdd);
  };

  return (
    <div className="container my-5">
      <div className={`row ${part === "right" ? "d-flex" : ""}`}>
        <div className={`col-lg-6 ${part === "right" ? "order-lg-2" : ""}`}>
          <div id="carousel" className="carousel" data-ride="carousel">
            <div className="carousel-inner">
              <StyledCarrousel className="item active">
                <ImageTest
                  className="w-100 shadow"
                  src={product.cover[mainImageIndex]}
                  alt="T-Shirt"
                />
              </StyledCarrousel>
            </div>
            <StyledCarrouselItem className="thumbnail-container item">
              {product.cover.slice(0, 4).map((imageSrc, index) => (
                <DivCarrouselItem>
                  <ImageTest
                    key={index}
                    className="thumbnail"
                    src={imageSrc}
                    alt="T-Shirt Thumbnail"
                    onClick={() => handleThumbnailClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                </DivCarrouselItem>
              ))}
            </StyledCarrouselItem>
          </div>
        </div>
        <Container className="col-lg-6">
          <div className="" style={{ padding: "0 3rem 3rem 3rem" }}>
            <p>Notti</p>
            <h1 className="display-4">T-shirt "{product.name}"</h1>
            <h4 className="lead">€{product.price}</h4>
            <p>Taxes incluses.</p>

            <div className="m-2 mb-3">
              <h5>Taille</h5>
              <ButtonGroup toggle>
                {sizeArray.map((size) => (
                  <OptionButton
                    key={size}
                    type="radio"
                    variant="outline-primary"
                    active={selectedSize === size}
                    onClick={() => handleSizeChange(size)}
                    disabled={
                      (size === "S" &&
                        product.s_stock_w === 0 &&
                        selectedColor === "Blanc") ||
                      (size === "S" &&
                        product.s_stock_b === 0 &&
                        selectedColor === "Noir") ||
                      (size === "M" &&
                        product.m_stock_w === 0 &&
                        selectedColor === "Blanc") ||
                      (size === "M" &&
                        product.m_stock_b === 0 &&
                        selectedColor === "Noir") ||
                      (size === "L" &&
                        product.l_stock_w === 0 &&
                        selectedColor === "Blanc") ||
                      (size === "L" &&
                        product.l_stock_b === 0 &&
                        selectedColor === "Noir") ||
                      (size === "XL" &&
                        product.xl_stock_w === 0 &&
                        selectedColor === "Blanc") ||
                      (size === "XL" &&
                        product.xl_stock_b === 0 &&
                        selectedColor === "Noir")
                    }
                  >
                    {size}
                  </OptionButton>
                ))}
              </ButtonGroup>
            </div>

            <div className="m-2 mb-3">
              <h5>Style</h5>
              <ButtonGroup toggle>
                {styleArray.map((style) => (
                  <OptionButton
                    key={style}
                    type="radio"
                    variant="outline-primary"
                    active={selectedStyle === style}
                    onClick={() => handleStyleChange(style)}
                  >
                    {style}
                  </OptionButton>
                ))}
              </ButtonGroup>
            </div>

            <div className="m-2 mb-3">
              <h5>Couleur</h5>
              <ButtonGroup toggle>
                {colorArray.map((color) => (
                  <OptionButton
                    key={color}
                    type="radio"
                    variant="outline-primary"
                    active={selectedColor === color}
                    onClick={() => handleColorChange(color)}
                  >
                    {color}
                  </OptionButton>
                ))}
              </ButtonGroup>
            </div>

            <div className="d-flex align-items-center mt-4">
              <h5>Quantité</h5>
              <div
                className="m-3"
                style={{
                  width: "100%",
                  display: "inline-flex",
                }}
              >
                <button
                  className="btn btn-outline-secondary"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  style={{ width: "30%" }}
                  className="form-control mx-2"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-3 pt-1 pb-1">
              <PanierButton
                onClick={addToCartHandler}
                disabled={!isSelectionComplete}
              >
                <span>Ajouter au panier</span>
              </PanierButton>
            </div>
            <div
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: format }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
};

export default ProductCard;
