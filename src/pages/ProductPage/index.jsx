import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { itemList } from "../../datas/itemList";
import ProductCard from "../../components/ProductCard";
import ImageWithText from "../../components/ImageWithText";
import Cart from "../../components/Cart";
function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = itemList.find((item) => item.id === productId);

  useEffect(() => {
    if (!product) {
      navigate("/error");
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div>
      <Cart />
      <ProductCard product={product} part="left" />
      <ImageWithText
        image={Image}
        part="left"
        title="CHAQUE DÉTAIL COMPTE"
        description="Chaque pièce est accompagné d'une carte qui sert de certificat
        d'authenticité. Elle donnera aussi accès à des drops exclusifs, des
        cadeaux... CONSERVEZ-LES!"
      />
    </div>
  );
}

export default ProductPage;
