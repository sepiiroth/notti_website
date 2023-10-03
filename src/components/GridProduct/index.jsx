import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Heading = styled.h3`
  text-align: left;
  margin-top: 20px;
  color: ${colors.secondary_text};
  font-weight: bold;
  font-size: 2.6rem;
`;

const Image = styled.img`
  width: 80%;
  position: relative;
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: left;
  padding: 0px;
  margin-left: -15px;
`;

const DivProduct = styled.div`
  margin: 15px;
  cursor: pointer;

  img {
    transform: ${({ isHovered }) => (isHovered ? "scale(1.1)" : "scale(1)")};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    h5 {
      text-decoration: underline;
    }
  }
`;

const DivCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  max-width: 300px;
  height: 100%;
  border-radius: 12px;
  position: relative;

  @media only screen and (max-width: 553px) {
    margin-top: 25px;
  }
`;

const DivSold = styled.div`
  color: ${colors.sold_text};
  background-color: ${colors.sold_background};
  position: absolute;
  width: 80%;
  top: 0px;
  left: 10%;
  font-size: 1rem;
  text-align: center;
  opacity: 1;
  z-index: 1;

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const CardBody = styled.div`
  color: ${colors.secondary_text};

  h5 {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0px !important;
  }

  span {
    text-transform: uppercase;
    font-size: 0.7rem;
    color: ${colors.text};
  }

  p {
  }
`;

function GridProduct({ product }) {
  const [hoveredProduct, setHoveredProduct] = useState();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container">
      <Heading className="heading">DERNIER DROP</Heading>
      <DivContainer className="container">
        {product.map((prod, index) => (
          <DivProduct
            className=""
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleProductClick(prod.id)}
            isHovered={hoveredProduct === index}
          >
            <DivCard>
              <div className="ccc">
                <p
                  className="text-center"
                  style={{ display: "inline-block", overflow: "hidden" }}
                >
                  {prod.isSpecialOffer && <DivSold>EN PROMO!</DivSold>}
                  <Image
                    className="imw"
                    src={
                      hoveredProduct === index ? prod.cover[1] : prod.cover[0]
                    }
                    alt=""
                  />
                </p>
              </div>
              <CardBody className="card-body">
                <h5>T-shirt "{prod.name}"</h5>
                <span>Notti</span>
                <p>€{prod.price}</p>
              </CardBody>
            </DivCard>
          </DivProduct>
        ))}
      </DivContainer>
    </div>
  );
}

export default GridProduct;
